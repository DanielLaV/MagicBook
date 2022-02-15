from flask import Blueprint, session, request, make_response
from app.models import Comment, user, db
from app.forms import CommentForm, DeleteCommentForm


comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field.capitalize()} : {error}')
    return errorMessages


@comment_routes.route('/', methods=['GET', 'POST'])
def main():
    """
    GET requests return all comments
    POST requests create a comment
    """
    if request.method == 'POST':
        form = CommentForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            content = form.data['content']
            user_id = form.data['user_id']
            post_id = form.data['post_id']

            new_comment = Comment(content=content, user_id=user_id, post_id=post_id)

            db.session.add(new_comment)
            db.session.commit()
            return new_comment.to_dict()

        elif form.errors:
            print("Form errors:", form.errors)
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    elif request.method == 'GET':
        comments = Comment.query.all()
        return {"comments": [comment.to_dict() for comment in comments]}


@comment_routes.route('/<int:id>', methods=['GET', 'PUT'])
def one_comment(id):
    """
    GET requests return a single comment
    PUT requests edit a single comment
    """
    one_comment = Comment.query.get(id)
    if request.method == 'PUT':
        form = CommentForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            content = form.data['front']

            one_comment.content = content

            db.session.add(one_comment)
            db.session.commit()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return one_comment.to_dict()


@comment_routes.route('/<int:id>', methods=['DELETE'])
def delete_comment(id):
    """
    Deletes a single comment with the id of 'id'
    """
    form = DeleteCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment.query.get(id)
        db.session.delete(comment)
        db.session.commit()
        return {}, 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
