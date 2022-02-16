from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='BoyWhoLived', first_name='Harry', last_name="Potter", email='chosenOne@hogwarts.edu', password='password', house='Gryffindor', year=3, bio="I'm the Chosen One", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028986/magicbook/Harry_tx9eo9.jpg')
    hermione = User(first_name='Hermione', last_name='Granger', username='hermey', email='hermion@ghogwarts.edu', password='password', house='Gryffindor', year=3, bio="Books are amazing. Why wasn't I put in Ravenclaw?", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028987/magicbook/Hermione_zmegde.jpg')
    ron = User(first_name='Ronald', last_name='Weasley', username='ronnie', email='rweasley@hogwarts.edu', password='password', house='Gryffindor', year=3, bio='Chudley Cannons 4 lyfe', pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028989/magicbook/Ron_z5tjl4.jpg')
    dean = User(first_name='Dean', last_name='Thomas', username='deano', email='dean@hogwarts.edu', password='password', house='Gryffindor', year=3, bio='I wish I knew my dad. :(', pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645030316/magicbook/dean_tllrxb.png')
    neville = User(first_name='Neville', last_name='Longbottom', username='longbutt', email='neville@hogwarts.edu', password='password', house='Gryffindor', year=3, bio='You think Harry has it bad? Check me out', pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028990/magicbook/Neville_h9wis7.jpg')
    parvati = User(first_name='Parvati', last_name='Patil', username='bestPatil', email='parvati@hogwarts.edu', password='password', house='Gryffindor', year=3, bio="Nothing comes between me and my twin sister.", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028988/magicbook/patil-twins_ytfw8a.jpg')
    draco = User(first_name='Draco', last_name='Malfoy', username='malfoy', email='draco@hogwarts.edu', password='password', house='Slytherin', year=3, bio="I will be the greatest Malfoy yet", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028986/magicbook/draco_rekbv4.jpg')
    crabbe = User(first_name='Vincent', last_name='Crabbe', username='crabby', email='vincent@hogwarts.edu', password='password', house='Slytherin', year=3, bio='Yous best not hurt da boss', pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028986/magicbook/crabbe_nhhgqg.gif')
    goyle = User(first_name='Gregory', last_name='Goyle', username='vinnie', email='gregory@hogwarts.edu', password='password', house='Slytherin', year=3, bio='Yous best not hurt da boss', pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028987/magicbook/goyle_ht2eo0.jpg')
    zabini = User(first_name='Blaise', last_name='Zabini', username='blaise', email='blaise@hogwarts.edu', password='password', house='Slytherin', year=3, bio="My mother has married 6 different men who have all mysteriously died. It's tragic.", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028990/magicbook/zabini_paqyw8.png')
    pansy = User(first_name='Pansy', last_name='Parkinson', username='pansy', email='pansy@hogwarts.edu', password='password', house='Slytherin', year=3, bio="You're ugly", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645030050/magicbook/dafault-profile_mlbiot.jpg')
    daphne = User(first_name='Daphne', last_name='Greengrass', username='daphne', email='daphne@hogwarts.edu', password='password', house='Slytherin', year=3, bio="As the heiress of the Noble and Most Ancient House of Greengrass, it would behoove you to be friends with me.", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028986/magicbook/daphne_edvho4.jpg')
    tracey = User(first_name='Tracey', last_name='Davis', username='tracey', email='tracey@hogwarts.edu', password='password', house='Slytherin', year=3, bio="I feel like no one sees me", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028989/magicbook/tracey_eadxsf.jpg')
    justin = User(first_name='Justin', last_name='Finch-Fletchley', username='justin', email='justin@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="Don't mess with House Hufflepuff!", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028987/magicbook/justin2_d2cp9j.jpg')
    hannah = User(first_name='Hannah', last_name='Abbott', username='hannah', email='hannah@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="Nevvy <3", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645030050/magicbook/dafault-profile_mlbiot.jpg')
    smith = User(first_name='Zacharias', last_name='Smith', username='zacharias', email='zacharias@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="Sometimes I forget I was in HP too", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028991/magicbook/zacharias_n5t1pk.jpg')
    bones = User(first_name='Susan', last_name='Bones', username='susan', email='susan@hogwarts.edu', password='password', house='Hufflepuff', year=3, bio="My aunt is the Head of Magical Law Enforcement. If you hurt me, she'll hurt you.", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028986/magicbook/bones_kom0ol.png')
    boot = User(first_name='Terry', last_name='Boot', username='terry', email='terry@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="I hope Hogwarts doesn't give me the Boot", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028989/magicbook/terry_rlsbzn.jpg')
    tony = User(first_name='Anthony', last_name='Goldstein', username='anthony', email='anthony@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="I'm probably the smartest person in my year", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028989/magicbook/goldstein_megwrr.png')
    mandy = User(first_name='Mandy', last_name='Brocklehurst', username='mandy', email='mandy@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="I don't remember who this is", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028990/magicbook/mandy_htg11d.jpg')
    padma = User(first_name='Padma', last_name='Patil', username='padma', email='padma@hogwarts.edu', password='password', house='Ravenclaw', year=3, bio="Nothing comes between me and my twin sister.", pic='https://res.cloudinary.com/dsebdtcp0/image/upload/v1645028988/magicbook/patil-twins_ytfw8a.jpg')




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
