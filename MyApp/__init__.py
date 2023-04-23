from flask import Flask
from .models import db, migrate
from .views.users import user

def create_app():
    app = Flask(__name__)
    # 链接数据库得配置
    app.config['JSON_AS_ASCII'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:12345678@localhost:3306/dt'

    app.register_blueprint(user)
    db.init_app(app)

    migrate.init_app(app, db)
    return app
