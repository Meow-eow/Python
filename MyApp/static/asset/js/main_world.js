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
function set_world_mid1(){
    var outdata = []
    $.ajax({
        url: "http://127.0.0.1:5000/world1",
        type: "post",
        contentType: "application/json;charset=UTF-8",
            success : function(res) {
//                console.log(res);
               var len = res.length;
                for(var i = 0; i < len; i++){
                    outdata.push({
                        name: res[i]["c_name"],
                        value: res[i]["confirm"]
                    })
                }
//                console.log(outdata);
                }
    })
}

function set_world_left1() {
    $.ajax({
        url: "/get_world_total_trend",
        type: "post",
        success: function (res) {
            world_left1_option.xAxis.data = res.days;
            world_left1_option.series[0].data = res.confirm;
            world_left1_option.series[1].data = res.heal;
            world_left1_option.series[2].data = res.dead;
            world_left1_echart.setOption(world_left1_option);
        }
    })
}

function set_world_left2() {
    $.ajax({
        url: "/get_world_add_trend",
        type: "post",
        success: function (res) {
            world_left2_option.xAxis.data = res.days;
            world_left2_option.series[0].data = res.confirm;
            world_left2_echart.setOption(world_left2_option);
        }
    })
}

function set_world_right1() {
    $.ajax({
        url: "/get_world_top5",
        type: "post",
        success: function (res) {
            world_right1_option.xAxis[0].data = res.country;
            world_right1_option.series[0].data = res.confirm;
            world_right1_echart.setOption(world_right1_option);
        }
    })
}

function set_world_mid2() {
    $.ajax({
        url: "/get_world_map_data",
        type: "post",
        success: function (res) {
            if (res.code == 200) {
                world_option.series[0].data = res.data;
                world_echart.setOption(world_option);
            } else {
                console.log('world_map', res.data)
            }
        },
    })
}

$(function () {
   timego();
   set_world_left1();
   set_world_left2();
   set_world_mid1();
   set_world_mid2();
   set_world_right1();
   set_right1();
});

setInterval(timego, 1000);
setInterval(set_world_left1, 43200000);
setInterval(set_world_left2, 43200000);
setInterval(set_world_mid1, 3600000);
setInterval(set_world_mid2, 43200000);
setInterval(set_world_right1, 43200000);
setInterval(set_right1, 3600000);
