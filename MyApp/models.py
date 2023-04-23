from flask import jsonify
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
migrate = Migrate()
class China_datas(db.Model):
    __tablename__ = 'China_datas'
    province = db.Column('province', db.Integer, primary_key=True)
    accu_diagnosis = db.Column('accu_diagnosis', db.String(200))
    comfirmAdd = db.Column('comfirmAdd', db.String(200))
    dead = db.Column('dead', db.String(200))
    heal = db.Column('heal', db.String(200))
    now_confirm = db.Column('now_confirm', db.String(200))
    deadRate = db.Column('deadRate', db.String(200))
    healRate = db.Column('healRate', db.String(200))
class dates_datas(db.Model):
    __tablename__ = 'dates_datas'
    date = db.Column('date', db.Integer, primary_key=True)
    accu_diagnosis = db.Column('accu_diagnosis', db.String(200))
    dead = db.Column('dead', db.String(200))
    heal = db.Column('heal', db.String(200))
    now_confirm = db.Column('now_confirm', db.String(200))
class world(db.Model):
    __tablename__ = 'world'
    id = db.Column('id', db.Integer, primary_key=True)
    dt = db.Column('dt', db.String(200))
    c_name = db.Column('c_name', db.String(200))
    continent = db.Column('continent', db.String(200))
    nowConfirm = db.Column('nowConfirm', db.String(200))
    confirm = db.Column('confirm', db.String(200))
    confirmAdd = db.Column('confirmAdd', db.String(200))
    suspect = db.Column('suspect', db.String(200))
    heal = db.Column('heal', db.String(200))
    dead = db.Column('dead', db.String(200))
    confirmAddCut = db.Column('confirmAddCut', db.String(200))
    confirmCompare = db.Column('confirmCompare', db.String(200))
    nowConfirmCompare = db.Column('confirmCompare', db.String(200))
    healCompare = db.Column('healCompare', db.String(200))
    deadCompare = db.Column('deadCompare', db.String(200))
class continents(db.Model):
    __tablename__ = 'continents'
    continent = db.Column('continent',db.Integer, primary_key=True)
    confirm = db.Column('confirm', db.String(200))
    confirmAdd = db.Column('confirmAdd', db.String(200))
    heal = db.Column('heal', db.String(200))
    dead = db.Column('dead', db.String(200))
def queryByCondition():
    ls1 = db.session.query(China_datas).all()
    db.session.commit()
    return ls1
def queryByCondition1():
    ls1 = db.session.query(China_datas).all()
    # print(ls)
    # for lst in ls:
    #     print(lst.province, lst.accu_diagnosis)
    db.session.commit()
    return ls1
def queryByCondition2():
    ls2 = db.session.query(China_datas).filter(China_datas.now_confirm>=150).all()
    # ls2 = db.session.query(China_datas).order_by(desc('now_confirm')).all()
    # print(ls2)
    # for lst in ls2:
    #     print(lst.province, lst.now_confirm)
    db.session.commit()
    return ls2
def queryByCondition3():
    ls3 = db.session.query(China_datas).all()
    # ls2 = db.session.query(China_datas).order_by(desc('now_confirm')).all()
    # print(ls3)
    db.session.commit()
    return ls3
def queryByCondition6():
    ls6 = db.session.query(China_datas).filter(China_datas.accu_diagnosis>950).all()
    # print(ls6)
    db.session.commit()
    return ls6
def queryByCon2():
    r5 = db.session.query(dates_datas).all()
    # print(r5)
    for lst in r5:
        print(lst.date, lst.dead, lst.heal)
    db.session.commit()
    return r5

def query1():
    w1 = db.session.query(world).all()
    # print(w1)
    db.session.commit()
    return w1
def query2():
    w2 = db.session.query(world).filter(world.confirm>3000000).all()
    # print(w2)
    for lst in w2:
        print(lst.confirm, lst.heal, lst.dead)
    db.session.commit()
    return w2
def query3():
    w3 = db.session.query(continents).all()
    db.session.commit()
    return w3

def query4():
    w4 = db.session.query(world).filter(world.confirm>6762904).all()
    print(w4)
    for lst in w4:
        print(lst.c_name,lst.confirm)
    db.session.commit()
    return w4
def query5():
    w5 = db.session.query(continents).all()
    db.session.commit()
    return w5





