from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func



class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(32), nullable=False)
    last_name = db.Column(db.String(32), nullable=False)
    username = db.Column(db.String(16), nullable=False, unique=True)
    email = db.Column(db.String(32), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    house = db.Column(db.String(16), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    bio = db.Column(db.String(256))
    pic = db.Column(db.String(64))
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'house': self.house,
            'year': self.year,
            'bio': self.bio,
            'pic': self.pic
        }


    post = db.relationship("Post", back_populates="user")
    comment = db.relationship("Comment", back_populates="user")
