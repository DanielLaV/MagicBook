# MagicBook

<img width="1919" alt="splash page" src="https://user-images.githubusercontent.com/58845762/155364475-2c5e9a76-7488-4bdb-94fb-39407d3c81ad.png">


<a href="https://magicbook-hp.herokuapp.com/">Live Site</a>  |  <a href="https://github.com/DanielLaV/MagicBook/wiki"> Project Wiki</a> | <a href="https://github.com/DanielLaV/MagicBook/issue">Report Bug</a>

MagicBook is a social media site for students of Hogwarts. This website was designed as a Week 21 project as part of App Academy's 24-week Full Stack Software Engineering Bootcamp.

## Technologies Used
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [Node.js](https://nodejs.org/en/) | [Flask](https://flask.palletsprojects.com/en/2.0.x/) | [React](https://reactjs.org/) | [Redux](https://redux.js.org/) | [SQLAlchemy](https://www.sqlalchemy.org/) | [PostgreSQL](https://www.postgresql.org/)

## Launching Locally

### Prerequisites
 - [Node.js 16.13.1](https://nodejs.org/en/)

### Getting Started

1. Clone the project repository
```
   git clone https://github.com/DanielLaV/MagicBook.git
```
2. Install dependencies
```
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```

3.  Create a local .env file modeled after the .env.example file in the root directory
```
   FLASK_APP=app
   FLASK_ENV=development
   SECRET_KEY=<<YOUR-SECRET_KEY>>
   DATABASE_URL=postgresql://magicbook_app:<<PASSWORD>>@localhost/magicbook_db
```
4. Set up your PostgreSQL user, password, and database. Make sure that it matches your .env file!

5. Access your `pipenv shell`, migrate your database, seed your database, and run your flask app with the following commands:
```
pipenv shell
```
```
flask db upgrade
```
```
flask seed all
```
```
flask run
```

5. To run the React App, `cd` into the `react-app` directory, install `react-app`, and then start React:
 ```
    cd react-app
 ```
  ```
    npm install
 ```
  ```
    npm start
 ```

## MagicBook In Action
Full user stories for the initial development phase are available on the [User Stories](https://github.com/DanielLaV/MagicBook/wiki/User-Stories) section of the project wiki. A feature list for the initial development phase is available on the [Feature List](https://github.com/DanielLaV/MagicBook/wiki/Feature-List) section of the project [wiki](https://github.com/DanielLaV/MagicBook/wiki).

### User Registration and Authentication
New users can register for an account by entering a unique username and email, their name, school house, year and a secure password.
<p align='center'>
<img width="300" alt="sign up form" src="https://user-images.githubusercontent.com/58845762/155364862-33c99c76-7603-46e3-96bc-a7d7ef6b1686.png">

</p>

Existing users can log in to their account by submitting their credentials via the login form.
<p align='center'>
<img width="300" alt="login form" src="https://user-images.githubusercontent.com/58845762/155367128-b802052e-e3ab-4f25-836a-0e82941f55e1.png">

</p>

Logged in users can edit their profile.
<p align='center'>
<img src='images/edit-bio.PNG' alt='Edit profile feature'>
</p>

Users may log out of their account by clicking the **LOGOUT** button on the site-wide navigation sidebar.
<p align='center'>
<img width="200" alt="logout button" src="https://user-images.githubusercontent.com/58845762/155369079-77e1a62e-71e3-486d-86c5-e1c2d0c2a527.png">

</p>


### Creating and Modifying A Post
 A user may add new posts to their profile.
<p align='center'>
<img width="523" alt="add new post feature" src="https://user-images.githubusercontent.com/58845762/155367830-6f033baa-6fb8-4031-9c40-97e10153fa72.png">
 <img width="758" alt="image" src="https://user-images.githubusercontent.com/58845762/155368172-14f74d8e-e44d-4a46-a7ff-2286ce0788f5.png">
</p>

Users can edit or remove their posts from their profile.
<p align='center'>
<img src='images/edit-card.PNG' alt='Editing a post feature'>
</p>
<p align='center'>
<img src='images/edit-card-modal.PNG' alt='Deleting a post feature'>
</p>


### Adding and Removing Comments From Posts
Users can comment on posts. They can read other comments and edit and delete their own comments.
<p align='center'>
<img width="500" alt="image" src="https://user-images.githubusercontent.com/58845762/155369530-33b86aa4-f0ab-41b9-8864-72f4a88591ee.png">
</p>


## Technical Implementation
### Database Design
The full database schema is available to view [on dbdiagram.io](https://dbdiagram.io/d/620ae91585022f4ee5930200), or as a [list of tables on the Database Schema page](https://github.com/DanielLaV/MagicBook/wiki/Database-Schema) of the wiki.



### Frontend Routes
All frontend routes are covered in detail on the [Fronted Routes section of our project wiki](https://github.com/DanielLaV/MagicBook/wiki/Frontend-Routes). Frontend routes were designed to enable users access to basic functionality such as registration, authentication, viewing posts, accessing comments, and viewing their profile page where users can manage their info.

### API Routes
All frontend routes are covered in detail on the [API Routes section of our project wiki](https://github.com/DanielLaV/MagicBook/wiki/API-Documentation). API routes were designed for users to interact with a page without being redirected.
   </br>

## Developmental Challenges


### Improved User Experience

#### **Site-wide Responsiveness**

The website is currently functional on all screen sizes, but is styled for screens greater than 900 px in width. New smaller-scale layouts will be implemented so that the user experience on mobile or tablet devices is comparable to the desktop user experience.
\

## Developer
**Daniel LaVergne** | <a href='https://github.com/DanielLaV'>Github</a> | <a href='https://www.linkedin.com/in/daniel-lavergne-137772206/'>LinkedIn</a></br>
