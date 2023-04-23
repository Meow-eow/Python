world_left1_echart = echarts.init(document.getElementById('left1'), 'dark');
        var c_name = []
        var dt2 = []
        var dat2 = []
        var data2=[]
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/world2",
            success : function(res2) {
               var len = res2.length;
                for(var i = 0; i < len; i++)
                {
                    c_name.push(res2[i]['c_name'])
                    dt2.push(res2[i]["confirm"]);
                    dat2.push(res2[i]["heal"]);
                    data2.push(res2[i]["dead"]);
                }
 console.log(res2);
world_left1_option = {
    backgroundColor:'', //设置无背景色
    title: {
        text: '全球累计趋势Top15',
        left: 'left',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#7171c6'
            }
        }
    },
    legend: {
        data: ['累计确诊', '累计治愈', '累计死亡'],
        left: 'right',
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: c_name
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            color: 'white',
            fonrSize: 12,
            formatter: function (value) {
                if (value>=1000){
                    value = value / 1000 + 'k';
                }
                return value
            }
        },
        axisLine: {
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#172738',
                width: 1,
                type: 'solid',
            }
        }
    },
    series: [
        {
            name: '累计确诊',
            type: 'line',
            smooth: true,
            data: dt2
        },
        {
            name: '累计治愈',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: dat2
        },
        {
            name: '累计死亡',
            type: 'line',
            smooth: true,
            data: data2
        },
    ]
    };
world_left1_echart.setOption(world_left1_option);
                },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });