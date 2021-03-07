from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask_todo'
db = SQLAlchemy(app)



@app.route('/hello')
def say_hello():

    people = [{'nameproduct': 'coffee 1', 'product_image': 1, 'product_description': 'tasty coffe 1'},
          {'productname': 'coffee 2', 'product_image': 2, 'product_description': 'tasty coffe 2'},
          {'productname': 'coffee 3', 'product_image': 3, 'product_description': 'tasty coffe 3'}]
    return jsonify(people) 
    