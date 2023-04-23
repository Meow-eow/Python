right1_echart = echarts.init(document.getElementById('right1', 'dark'));
right1_option = {
    title: {
        text: '非湖北确诊城市Top5',
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
            data: [],
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
            data: [],
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

function set_right1() {
    $.ajax({
        url: "/get_china_top5",
        type: "post",
        success: function (res) {
            right1_option.xAxis[0].data = res.city;
            right1_option.series[0].data = res.confirm;
            right1_echart.setOption(right1_option);
        }
    })
}
