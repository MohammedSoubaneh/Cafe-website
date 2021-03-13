from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Product(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, nullable=False)
    price = db.Column(db.Integer)
    image = db.Column(db.Unicode, nullable=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


@app.route('/post_product', methods=['POST'])
def post_product():

      product = Product(
            name=request['name'],
            price= request['price'],
            image = request['image'],
            prod_description = request['description']
      )



#     product = [{'nameproduct': 'coffee 1', 'product_image': 1, 'product_description': 'tasty coffe 1'},
#           {'productname': 'coffee 2', 'product_image': 2, 'product_description': 'tasty coffe 2'},
#           {'productname': 'coffee 3', 'product_image': 3, 'product_description': 'tasty coffe 3'}]
#     return jsonify(people) 
    