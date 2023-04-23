
class Config(object):
    DEBUG = True
    JSON_AS_ASCII=False
    SECRET_KEY = 'secret_key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

# 开发环境
class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:12345678@localhost:3306/dt'
    DEBUG = True


# 测试环境
class TestingConfig(Config):
    DEBUG = True
    DB = '127.0.0.1'

# 生产环境
class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:12345678@localhost:3306/dt'
    DEBUG = True


# 配置的字典
configDict = {
    'default':DevelopmentConfig,
    'development':DevelopmentConfig,
    'testing':TestingConfig,
    'production':ProductionConfig
}
