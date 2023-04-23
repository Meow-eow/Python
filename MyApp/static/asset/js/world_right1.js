world_right1_echart = echarts.init(document.getElementById('right1', 'dark'));
        var dt4 = []
        var dat4 = []
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/world4",
            success : function(res4) {
//                console.log(res4);
               var len = res4.length;
                for(var i = 0; i < len; i++)
                {
                    dt4.push(res4[i]['c_name'])
                    dat4.push(res4[i]["confirm"]);
                }
 console.log(res4);
world_right1_option = {
    title: {
        text: '累计确诊国家Top5',
        left: 'left',
        textStyle: {//主标题文本样式
            "fontSize": 18,
            "fontWeight": "bolder",
            "color": "white",
            },
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: dt4,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
            show: true,
            color: 'white',
            fonrSize: 12,
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                show: true,
                color: 'white',
                fonrSize: 12,
            },
            splitLine: {
                lineStyle:{
                    type: "dashed",  // 分隔线类别
                }
            }
        }
    ],
    series: [
        {
            name: '累计确诊',
            type: 'bar',
            barWidth: '60%',
            data: dat4,
            label: {
              normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
            }
        },
        }
    ]
};
world_right1_echart.setOption(world_right1_option);
                },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });

