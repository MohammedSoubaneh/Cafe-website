from flask import Flask, jsonify, request, Blueprint
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
main = Blueprint('main', __name__)

class Product(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, nullable=False)
    price = db.Column(db.Integer)
    image = db.Column(db.Unicode, nullable=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


@main.route('/post_product', methods=['POST'])
def post_product():

      product_data = request.get_json()

      new_product = Product(name=product_data['name'], price=product_data['price'], image=product_data['image'])

      db.session.add(new_product)
      db.session.commit()

      return 'Done', 201


@main.route('/products')
def products():

    product_list = Product.query.all()

    products = []

    for product in product_list:

        products.append({'name': product.name, 'price': product.price, 'image': product.image })

    return jsonify({'products' : products})

#     product = [{'nameproduct': 'coffee 1', 'product_image': 1, 'product_description': 'tasty coffe 1'},
#           {'productname': 'coffee 2', 'product_image': 2, 'product_description': 'tasty coffe 2'},
#           {'productname': 'coffee 3', 'product_image': 3, 'product_description': 'tasty coffe 3'}]
#     return jsonify(people) 

app.register_blueprint(main)