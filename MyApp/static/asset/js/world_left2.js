world_left2_echart = echarts.init(document.getElementById('left2'), 'dark');
        var dt3 = []
        var dat3 = []
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/world3",
            success : function(res3) {
//                console.log(res3);
               var len = res3.length;
                for(var i = 0; i < len; i++)
                {
                    dt3.push(res3[i]['continent'])
                    dat3.push(res3[i]["confirmAdd"]);
                }
 console.log(res3);
world_left2_option = {
    backgroundColor:'', //设置无背景色
    title: {
        text: '全球各洲新增趋势',
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
        data: ['新增确诊'],
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
        data: dt3
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
            name: '新增确诊',
            type: 'line',
            smooth: true,
            data: dat3
        },
    ]
    };
world_left2_echart.setOption(world_left2_option);
                },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });