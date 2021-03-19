from flask import Flask, jsonify, request, Blueprint
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
main = Blueprint('main', __name__)


class Products(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, nullable=False)
    price = db.Column(db.Integer)
    description = db.Column(db.Unicode, nullable=False)
    weight = db.Column(db.Integer)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        


@main.route('/post_products', methods=['POST'])
def post_products():

      product_data = request.get_json()

      new_product = Products(name=product_data['name'], price=product_data['price'], description=product_data['description'], weight=product_data['weight'])

      db.session.add(new_product)
      db.session.commit()

      return 'Done', 201

@main.route('/products')
def products():

    product_list = Products.query.all()

    products = []

    for product in product_list:

        products.append({'name': product.name, 'price': product.price, 'description': product.description, 'weight': product.weight})

    return jsonify({'products' : products})


@main.route('/choose_category')
def choose_category():
    choose_category = [{'name': 'COFFEE BEANS', 'image': 'not now'},{'name': 'GROUND COFFEE', 'image': 'not now'},{'name': 'COFFEE CAPSULES COMPATIBLE NESPRESSO MACHINE', 'image': 'not now'}
    ,{'name': 'COFFEE CAPSULE COMPATIBLE WITH DOLCE GUSTO SYSTEM', 'image': 'not now'},{'name': 'TEAS AND INFUSION', 'image': 'not now'},{'name': 'CHOCOLATES', 'image': 'not now'},
    {'name': 'BIO PRODUCTS', 'image': 'not now'},{'name': 'ACCESSOIRES', 'image': 'not now'}]

    return jsonify({'choose_category': choose_category})

app.register_blueprint(main)