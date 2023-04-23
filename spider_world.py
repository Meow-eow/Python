import time
import traceback
import requests
import json
import pymysql


def get_world_data():
     url='https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist'
     headers={'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'}
     res = requests.get(url, headers=headers)
     response_data_0 = json.loads(res.text.replace('Jquery34102848205531413024_1584924641755(', '')[:-1])  # 转化json对象
     response_data_1=response_data_0['data']
     world={}
     for i in response_data_1:
         temp=i['y']+'.'+i['date']
         tup = time.strptime(temp, '%Y.%m.%d')
         dt = time.strftime('%Y-%m-%d', tup)  # 改变时间格式，插入数据库 日期
         # print(ds)
         c_name=i['name']  # 国家
         continent=i['continent']  # 所属大洲
         nowConfirm=i['nowConfirm']  # 现有确诊
         confirm=i['confirm']  # 累计确诊
         confirmAdd=i['confirmAdd']  # 新增确诊
         suspect=i['suspect']  # 现有疑似
         heal=i['heal']  # 累计治愈
         dead=i['dead']  # 累计死亡
         confirmAddCut=i['confirmAddCut']
         confirmCompare=i['confirmCompare']
         nowConfirmCompare=i['nowConfirmCompare']
         healCompare=i['healCompare']
         deadCompare=i['deadCompare']
         world[c_name] = {'dt':dt ,
          'continent': continent,
          'nowConfirm': nowConfirm,
          'confirm': confirm,
          'confirmAdd': confirmAdd,
          'suspect': suspect,
          'heal': heal,
          'dead': dead,
          'confirmAddCut': confirmAddCut,
          'confirmCompare': confirmCompare,
          'nowConfirmCompare': nowConfirmCompare,
          'healCompare': healCompare,
          'deadCompare': deadCompare,
          }
     return world
# mysql建立连接
def get_conn():
    # 建立连接
    con = pymysql.connect(host="127.0.0.1",
                          user="root",
                          password="12345678",
                          db="dt",
                          charset="utf8")
    # 创建游标
    cursor = con.cursor()
    return con, cursor


# mysql关闭连接
def close_conn(con, cursor):
    if cursor:
        cursor.close()
    if con:
        con.close()
def insert_world():
    cursor = None
    conn = None
    try:
            dic = get_world_data()
            print(dic)
            conn, cursor = get_conn()
            sql = "insert into world values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            sql_query = 'select %s=(select dt from world order by id desc limit 1)'  # 对比当前最大时间戳
            cursor.execute(sql_query,dic['美国']['dt'])
            if not cursor.fetchone()[0]:
                print(f"{time.asctime()}开始插入世界数据")
                for k, v in dic.items():
                                 cursor.execute(sql, [0,v.get('dt'), k, v.get("continent"), v.get("nowConfirm"),
                      v.get("confirm"), v.get("confirmAdd"), v.get("suspect"),v.get("heal"), v.get("dead"),
                      v.get("confirmAddCut"), v.get("confirmCompare"), v.get("nowConfirmCompare"), v.get("healCompare"),
                     v.get("deadCompare")])
                conn.commit()  # 提交事务
                print(f"{time.asctime()}插入世界数据完毕")
            else:
                 print(f"{time.asctime()}世界数据已是最新数据！")
    except:
        traceback.print_exc()
    finally:
        close_conn(conn, cursor)