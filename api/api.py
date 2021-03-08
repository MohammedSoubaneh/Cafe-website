from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask_todo'
db = SQLAlchemy(app)

from models import Product

@app.route('/post_product', methods=['POST'])
def post_product():

      product = Product(
            name=request['name'],
            price= request['price'],
            image = request['image'],
            prod_description = request['description']
      )
      db.session.add(product)
      db.commit.session.commit()



#     product = [{'nameproduct': 'coffee 1', 'product_image': 1, 'product_description': 'tasty coffe 1'},
#           {'productname': 'coffee 2', 'product_image': 2, 'product_description': 'tasty coffe 2'},
#           {'productname': 'coffee 3', 'product_image': 3, 'product_description': 'tasty coffe 3'}]
#     return jsonify(people) 
    