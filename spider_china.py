import pandas as pd
import json
import requests

header = {
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"  # 传入headers
}
# 请求接口
url = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
res = requests.get(url)
data = res.text
data2 = json.loads(data)  # 转化json对象
data3 = data2['data']
data4 = data3['statisGradeCityDetail']
grade = []
province = []
city = []
date = []
confirmAdd = []
confirm = []
dead = []
heal = []
nowConfirm = []
for i in data4:
    grade.append(i['grade'])  # 疫情等级
    province.append(i['province'])  # 省份
    city.append(i['city'])  # 城市
    date.append(str(i['syear']) + "/" + str(i['sdate']))  # 日期
    confirmAdd.append(i['confirmAdd'])  # 新增病例
    confirm.append(i['confirm'])  # 累计确诊
    dead.append(i['dead'])  # 累计死亡
    heal.append(i['heal'])  # 累计治愈
    nowConfirm.append(i['nowConfirm'])  # 现有确诊
data5 = pd.DataFrame({
    "疫情风险等级": grade,
    "省份": province,
    "城市": city,
    "日期": date,
    "新增病例": confirmAdd,
    "累计确诊": confirm,
    "累计死亡": dead,
    "累计治愈": heal,
    "现有确诊": nowConfirm
})
# print(data5[:5])
# data5.to_csv("China_province_datas.csv", index=0)

