from flask import Blueprint, session, request, make_response
from app.models import Post, db
from app.forms import PostForm, DeletePostForm
from sqlalchemy import desc

post_routes = Blueprint('posts', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field.capitalize()} : {error}')
    return errorMessages


@post_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    GET requests return the 10 latest posts
    POST requests create a new post in the database
    """
    if request.method == 'POST':
        form = PostForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            content = form.data['content']
            user_id = form.data['user_id']

            new_post = Post(content=content, user_id=user_id)

            db.session.add(new_post)
            db.session.commit()
            return new_post.to_dict()
        elif form.errors:
            print("Form errors: ", form.errors)
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    if request.method == 'GET':
        posts = Post.query.order_by(desc(Post.created_at)).limit(10)
        return {"posts": [post.to_dict() for post in posts]}
    return new_post.to_dict()
