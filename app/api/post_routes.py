from flask import Blueprint, request, make_response
from app.models import Post, db, Comment
from app.forms import PostForm, DeletePostForm, CommentForm
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


@post_routes.route('/<int:id>/comments/')
def post_comments(id):
    """
    GET requests return all comments associated with a specific post
    """
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form['csrf_token'].data:
        post_comments = Comment.query.filter(Comment.post_id == id).all()
        return {"comments": [comment.to_dict() for comment in post_comments]}
    if form.errors:
        return form.errors
    return make_response(404)


@post_routes.route('/<int:id>', methods=['GET', 'PUT'])
def single_post(id):
    """
    GET requests retrieve one post
    PUT requests edit the post
    """
    new_post = Post.query.get(id)
    if request.method == 'PUT':
        form = PostForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            content = form.data['content']

            new_post.content = content

            db.session.add(new_post)
            db.session.commit()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return new_post.to_dict()


@post_routes.route('/<int:id>', methods=['DELETE'])
def delete_post(id):
    """
    Deletes the post matching the id of id
    """
    form = DeletePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post.query.get(id)
        db.session.delete(post)
        db.session.commit()
        return {}, 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
