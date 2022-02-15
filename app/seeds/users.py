from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='BoyWhoLived', first_name='Harry', last_name="Potter", email='chosenOne@hogwarts.edu', password='password', house='Gryffindor', year=3, bio="I'm the Chosen One", pic='')
    hermione = User(first_name='Hermione', last_name='Granger', username='hermey', email='hermion@ghogwarts.edu', password='password', house='Gryffindor', year=3, bio="Books are amazing. Why wasn't I put in Ravenclaw?", pic='')
    ron = User(first_name='Ronald', last_name='Weasley', username='ronnie', email='rweasley@hogwarts.edu', password='password', house='Gryffindor', year=3, bio='Chudley Cannons 4 lyfe', pic='')
    dean = User(first_name='Dean', last_name='Thomas', username='deano', email='dean@hogwarts.edu', password='password', house='Gryffindor', year=3, bio='I wish I knew my dad. :(', pic='')
    neville = User(first_name='Neville', last_name='Longbottom', username='longbutt', email='neville@hogwarts.edu', password='password', house='Gryffindor', year=3, bio='You think Harry has it bad? Check me out', pic='')
    parvati = User(first_name='Parvati', last_name='Patil', username='bestPatil', email='padma@hogwarts.edu', password='password', house='Gryffindor', year=3, bio="Nothing comes between me and my twin sister.", pic='')
    draco = User(first_name='Draco', last_name='Malfoy', username='malfoy', email='draco@hogwarts.edu', password='password', house='Slytherin', year=3, bio="I will be the greatest Malfoy yet", pic='')
    crabbe = User(first_name='Vincent', last_name='Crabbe', username='crabby', email='vincent@hogwarts.edu', password='password', house='Slytherin', year=3, bio='Yous best not hurt da boss', pic='')
    goyle = User(first_name='Gregory', last_name='Goyle', username='vinnie', email='gregory@hogwarts.edu', password='password', house='Slytherin', year=3, bio='Yous best not hurt da boss', pic='')
    zabini = User(first_name='Blaise', last_name='Zabini', username='blaise', email='blaise@hogwarts.edu', password='password', house='Slytherin', year=3, bio="My mother has married 6 different men who have all mysteriously died. It's tragic.", pic='')
    pansy = User(first_name='Pansy', last_name='Parkinson', username='pansy', email='pansy@hogwarts.edu', password='password', house='Slytherin', year=3, bio="You're ugly", pic='')
    daphne = User(first_name='Daphne', last_name='Greengrass', username='daphne', email='daphne@hogwarts.edu', password='password', house='Slytherin', year=3, bio="As the heiress of the Noble and Most Ancient House of Greengrass, it would behoove you to be friends with me.", pic='')
    tracey = User(first_name='Tracey', last_name='Davis', username='tracey', email='tracey@hogwarts.edu', password='password', house='Slytherin', year=3, bio="I feel like no one sees me", pic='')
    justin = User(first_name='Justin', last_name='Finch-Fletchley', username='justin', email='justin@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="Don't mess with House Hufflepuff!", pic='')
    hannah = User(first_name='Hannah', last_name='Abbott', username='hannah', email='hannah@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="Nevvy <3", pic='')
    smith = User(first_name='Zacharias', last_name='Smith', username='zacharias', email='zacharias@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="Sometimes I forget I was in HP too", pic='')
    bones = User(first_name='Susan', last_name='Bones', username='susan', email='susan@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="My aunt is the Head of Magical Law Enforcement. If you hurt me, she'll hurt you.", pic='')
    boot = User(first_name='Terry', last_name='Boot', username='terry', email='terry@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="I hope Hogwarts doesn't give me the Boot", pic='')
    tony = User(first_name='Anthony', last_name='Goldstein', username='anthony', email='anthony@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="I'm probably the smartest person in my year", pic='')
    mandy = User(first_name='Mandy', last_name='Brocklehurst', username='mandy', email='mandy@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="I don't remember who this is", pic='')
    padma = User(first_name='Padma', last_name='Patil', username='padma', email='padma@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="Nothing comes between me and my twin sister.", pic='')










    db.session.add(demo)
    db.session.add(hermione)
    db.session.add(ron)
    db.session.add(dean)
    db.session.add(neville)
    db.session.add(parvati)
    db.session.add(draco)
    db.session.add(crabbe)
    db.session.add(goyle)
    db.session.add(zabini)
    db.session.add(pansy)
    db.session.add(daphne)
    db.session.add(tracey)
    db.session.add(justin)
    db.session.add(hannah)
    db.session.add(smith)
    db.session.add(bones)
    db.session.add(boot)
    db.session.add(tony)
    db.session.add(mandy)
    db.session.add(padma)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
