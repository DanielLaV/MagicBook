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
<img src='images/login.PNG' alt='Login modal'>
</p>

Logged in users can edit their profile.
<p align='center'>
<img src='images/edit-bio.PNG' alt='Edit profile feature'>
</p>

Users may log out of their account by clicking the **LOGOUT** button on the site-wide header.
<p align='center'>
<img src='images/logout-button.PNG' alt='Logout button in navigation bar'>
</p>


### Creating and Modifying An Event
Logged-in users can create a new event with a title and a description.
<p align='center'>
<img src='images/create-deck.PNG' alt='Creating a new event feature'>
</p>

All users can view public event information. Event owners can only edit or delete their own events.
<p align='center'>
<img src='images/deck-details.PNG' alt='Creating a new event'>
</p>

Only users invited to a private event can see that event.

When modifying an event, an Edit form will populate with the event's current information. The user who created the event will be able to edit the event title and description.
<p align='center'>
<img src='images/edit-deck-modal.PNG' alt='Editing an event'>
</p>


### Creating and Modifying A Post
 A user may add new posts to their profile.
<p align='center'>
<img src='images/add-card.PNG' alt='Creating a new post feature'>
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
<img src='images/study-list-buttons.PNG' alt='Creating a comment feature'>
</p>


## Technical Implementation
### Database Design
The full database schema is available to view [on dbdiagram.io](https://dbdiagram.io/d/620ae91585022f4ee5930200), or as a [list of tables on the Database Schema page](https://github.com/DanielLaV/MagicBook/wiki/Database-Schema) of the wiki.



### Frontend Routes
All frontend routes are covered in detail on the [Fronted Routes section of our project wiki](https://github.com/DanielLaV/MagicBook/wiki/Frontend-Routes). Frontend routes were designed to enable users access to basic functionality such as registration, authentication, viewing decks, accessing cards, searching by tags, and viewing their profile page where users can manage their decks.

### API Routes
All frontend routes are covered in detail on the [API Routes section of our project wiki](https://github.com/DanielLaV/MagicBook/wiki/API-Documentation). API routes were designed for users to interact with a page without being redirected.
   </br>

## Developmental Challenges


### Improved User Experience

#### **Site-wide Responsiveness**

The website is currently functional on all screen sizes, but is styled for screens greater than 900 px in width. New smaller-scale layouts will be implemented so that the user experience on mobile or tablet devices is comparable to the desktop user experience.

### Improved Maintainability

\

## Developer
**Daniel LaVergne** | <a href='https://github.com/DanielLaV'>Github</a> | <a href='https://www.linkedin.com/in/daniel-lavergne-137772206/'>LinkedIn</a></br>
