function timego(){
    var time = document.getElementById('time');
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var week = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    time.innerHTML = year+'年'+month+'月'+date+'日 '+toweek(week)+' '+todou(hour)+':'+todou(minute)+':'+todou(second);
}
function toweek(num){
        switch(num){
            case 0:
                return '星期天';
                break;
            case 1:
                return '星期一';
                break;
            case 2:
                return '星期二';
                break;
            case 3:
                return '星期三';
                break;
            case 4:
                return '星期四';
                break;
            case 5:
                return '星期五';
                break;
            case 6:
                return '星期六';
                break;
            }
    }
function todou(num){
        if(num<10){
            return '0'+num;
        }
        else {
            return num;
        }
    }
function set_mid1(){
    $.ajax({
        url: "/get_china_lasted_num",
        type: "post",
        success: function (res) {
            $(".num h1").eq(0).text(res.confirm);
            $(".num h1").eq(1).text(res.suspect);
            $(".num h1").eq(2).text(res.heal);
            $(".num h1").eq(3).text(res.dead);
        }
    })
}

$(function () {
    timego();
    set_left1();    // 全国累计趋势图 （确诊 疑似 治愈 死亡）
    set_left2();    // 全国新增趋势图 （确诊 疑似 治愈 死亡）
    set_right1();   // 全国非湖北确诊城市Top5
    set_right2();   // 百度疫情热搜
    set_mid1();     // 全国最新疫情数据
    set_mid2();     // 全国疫情地图
});

setInterval(timego,1000);
setInterval(set_left1, 43200000);   // 12小时
setInterval(set_left2, 43200000);    // 12小时
setInterval(set_mid1, 3600000); // 1小时
setInterval(set_mid2, 43200000);   // 24小时
setInterval(set_right1, 43200000);  // 24小时
setInterval(set_right2, 3600000);   // 1小时
