from app.models import db, Post


def seed_posts():
    p1 = Post(user_id=1, content="I did some accidental magic this summer. I blew my aunt up to the size of a whale lol! I thought I was going to get in trouble, but it turns out Fudge is pretty cool.")
    p2 = Post(user_id=2, content="I may have taken too many classes this year. It's really starting to wear me out. It would be really helpful if @Ronnie and @BoyWhoLived would stay out of trouble!!")
    p3 = Post(user_id=3, content="My parents got me a new wand this summer and we got to go to Egypt to visit Bill! What a summer!")
    p4 = Post(user_id=4, content="Does anyone know if there's such a thing as wizard scientists? Or a spell for a paternity test? I found this bloke who used to hang around my mum and I want to see if he's my dad.")
    p5 = Post(user_id=5, content="My gran bought a hat that's even worse than the vulture one. I didn't think it was possible.")
    p6 = Post(user_id=6, content="Another summer perfectly in sync with Padma")
    p7 = Post(user_id=7, content="It took us 2 months to replace Dobby! You're going to pay @BoyWhoLived")
    p8 = Post(user_id=8, content="@BoyWhoLived watch yer step")
    p9 = Post(user_id=9, content="@malfoy Do you have the history assignment from today?")
    p10 = Post(user_id=10, content="Can't wait to be older so I don't have to come to school.")
    p11 = Post(user_id=11, content="DID YOU SEE WHAT @HANNAH WAS WEARING!? AHAHAHAHA")
    p12 = Post(user_id=12, content="Herbology was amazing today. It's amazing how many cool magical plants there are!")
    p13 = Post(user_id=13, content="Has anyone heard the new Weird Sisters song!? What a jam!")
    p14 = Post(user_id=14, content="@Zacharias @Hannah Study group tonight? I could really use some help after I spent half of last year petrified!")
    p15 = Post(user_id=15, content="I really need to study tonight. Neville keeps distracting me!")
    p16 = Post(user_id=16, content="I can't believe someone actually escaped Azkaban! It's never happened before and now there are dementors flying around. I'm pretty freaked tbh")
    p17 = Post(user_id=17, content="I'm pretty sure my aunt will capture Sirius Black before long. She's really good at her job.")
    p18 = Post(user_id=18, content="I looked up Polyjuice Potion today and it doesn't even look that hard to make. It mostly just takes time. Not that I would make it...")
    p19 = Post(user_id=19, content="Just two more years until we can be prefects. Hope I get it. I hear the prefect's bathroom is so big there are merpeople that live in the bath.")
    p20 = Post(user_id=20, content="Nobody in this school cares about classes other than Ravenclaws. If you don't want to study, stay home! At least stop disturbing the rest of us!!")
    p21 = Post(user_id=21, content="Another summer perfectly in sync with Parvati")

    db.session.add(p1)
    db.session.add(p4)
    db.session.add(p17)
    db.session.add(p5)
    db.session.add(p2)
    db.session.add(p11)
    db.session.add(p7)
    db.session.add(p18)
    db.session.add(p16)
    db.session.add(p12)
    db.session.add(p14)
    db.session.add(p6)
    db.session.add(p21)
    db.session.add(p13)
    db.session.add(p20)
    db.session.add(p9)
    db.session.add(p10)
    db.session.add(p3)
    db.session.add(p15)
    db.session.add(p19)
    db.session.add(p8)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
