from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, EqualTo

class CommentForm(FlaskForm):
    content = StringField("Post: ", validators=[DataRequired(), Length(min=2, max=512, message="Please limit the title to be between 2 and 512 characters!")])
    user_id = IntegerField("", validators={DataRequired()})
    post_id = IntegerField("", validators={DataRequired()})
    submit = SubmitField("Submit")


class DeleteCommentForm(FlaskForm):
    comment_id = IntegerField("", validators=[DataRequired()])
    curr_user_id = IntegerField("", validators=[DataRequired(), EqualTo('comment_user_id', message='Error! You are not authorized to delete this post')])
    comment_user_id = IntegerField("", validators=[DataRequired(), EqualTo('curr_user_id', message='Error! You are not authorized to delete this post')])
    submit = SubmitField("Submit")
