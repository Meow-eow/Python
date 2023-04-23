from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
import MyApp
from MyApp import db
# from MyApp.models import *

app = MyApp.create_app()
manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()














# python manage.py runserver  Terminal运行