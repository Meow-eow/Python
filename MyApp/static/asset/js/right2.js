right1_echart = echarts.init(document.getElementById('right2', 'dark'));
        var dt5 = []
        var dat5 = []
    $.ajax({
        url: "http://127.0.0.1:5000/world5",
        type: "post",
        success: function (res5) {
               var len = res5.length;
                for(var i = 0; i < len; i++)
                {
                    dt5.push(res5[i]['continent'])
                    dat5.push(res5[i]["heal"]);
                }
 console.log(res5);
right1_option = {
    title: {
        text: '各洲累计治愈',
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
            data: dt5,
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
            name: 'heal',
            type: 'bar',
            barWidth: '60%',
            data: dat5,
            itemStyle: {
            normal: {
                color:'#27d08a',
                opacity: 1,
				barBorderRadius: 5,
            }
        },
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
right1_echart.setOption(right1_option);
world_right1_echart.setOption(world_right1_option);
                },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });

