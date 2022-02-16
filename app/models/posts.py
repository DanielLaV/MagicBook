from .db import db
from flask_login import UserMixin


class Post(db.Model, UserMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(512), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id
        }


    user = db.relationship('User', back_populates='post')
    comment = db.relationship('Comment', back_populates='post', cascade='all, delete')
