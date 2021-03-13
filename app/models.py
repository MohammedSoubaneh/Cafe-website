from api import db

class Product(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, nullable=False)
    price = db.Column(db.Integer)
    image = db.Column(db.Unicode, nullable=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)