from MyApp.models import queryByCondition1, queryByCondition2, queryByCondition3, queryByCondition6, \
    queryByCon2, queryByCondition, query1, query2, query3, query4, query5

from flask import Blueprint, request, render_template, jsonify
user = Blueprint("user", __name__)


# @user.route("/login", methods=["POST", "GET"])
# def user_login():
#     if request.method == "POST":
#         username = request.form.get("username")
#         password = request.form.get("password")
#         # 进行数据库查询
#         # select * from user where username="username" and password="password"
#         # if 查询成功:
#         # return "登录成功"
#         # else:
#
#         return "登陆失败"
#     return render_template("login.html")
# China
@user.route('/')
def China():
    return render_template('index.html')
# World
@user.route('/world')
def world():
    return render_template('world.html')

# center
@user.route("/center",methods=['GET','POST'])
def getcenter():
    center = queryByCondition()
    cen = []
    for lst in center:
        print(lst.province, lst.accu_diagnosis)
        cen.append({'province': lst.province, 'accu_diagnosis': lst.accu_diagnosis})
    return jsonify(cen)
# left1
@user.route("/require1",methods=['GET','POST'])
def getrequire1():
    require1 = queryByCondition1()
    re1 = []
    for lst in require1:
        print(lst.province, lst.comfirmAdd)
        re1.append({'province': lst.province, 'comfirmAdd': lst.comfirmAdd})
    return jsonify(re1)
# left2
@user.route("/require2",methods=['POST'])
def getrequire2():
    require2 = queryByCondition2()
    re2 = []
    for lst in require2:
        print(lst.province, lst.now_confirm)
        re2.append({'province': lst.province, 'now_confirm': lst.now_confirm})
    return jsonify(re2)

# right1
@user.route("/right1",methods=['POST'])
def getright1():
    right1 = queryByCondition3()
    r1 = []
    for lst in right1:
        print(lst.province, lst.deadRate, lst.healRate)
        r1.append({'province': lst.province, 'deadRate': lst.deadRate, 'healRate': lst.healRate})
    return jsonify(r1)
# right2
@user.route("/right2", methods=['POST'])
def getright2():
    right2 = queryByCon2()
    r2 = []
    for lst in right2:
        print(lst.date, lst.dead, lst.heal)
        r2.append({'date': lst.date, 'dead': lst.dead, 'heal': lst.heal})
    return jsonify(r2)
# right3
@user.route("/right3", methods=['POST'])
def getrequire3():
    right3 = queryByCondition6()
    r3 = []
    for lst in right3:
        print(lst.province, lst.accu_diagnosis)
        r3.append({'province': lst.province, 'accu_diagnosis': lst.accu_diagnosis})
    return jsonify(r3)

@user.route("/world1", methods=['POST'])
def getworld1():
    world1 = query1()
    w1 = []
    for lst in world1:
        print(lst.c_name, lst.confirm)
        w1.append({'c_name': lst.c_name, 'confirm': lst.confirm})
    return jsonify(w1)

@user.route("/world2", methods=['POST'])
def getworld2():
    world2 = query2()
    w2 = []
    for lst in world2:
        print(lst.c_name, lst.confirm, lst.heal, lst.dead)
        w2.append({'c_name': lst.c_name, 'confirm': lst.confirm, 'heal': lst.heal, 'dead': lst.dead})
    return jsonify(w2)
@user.route("/world3", methods=['POST'])
def getworld3():
    world3 = query3()
    w3 = []
    for lst in world3:
        print(lst.continent, lst.confirmAdd)
        w3.append({'continent': lst.continent, 'confirmAdd': lst.confirmAdd})
    return jsonify(w3)
@user.route("/world4", methods=['POST'])
def getworld4():
    world4 = query4()
    w4 = []
    for lst in world4:
        print(lst.c_name, lst.confirm)
        w4.append({'c_name':lst.c_name, 'confirm': lst.confirm})
    return jsonify(w4)

@user.route("/world5", methods=['POST'])
def getworld5():
    world5 = query5()
    w5 = []
    for lst in world5:
        print(lst.continent, lst.heal)
        w5.append({'continent': lst.continent,'heal': lst.heal})
    return jsonify(w5)