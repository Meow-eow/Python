left1_echart = echarts.init(document.getElementById('left1'), 'dark');
left1_option = {
    // title: {
        // text: '全国累计趋势',
        // left: 'left',
    // },
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
        data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡'],
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
        data: []
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
            data: []
        },
        {
            name: '现有疑似',
            type: 'line',
            smooth: true,
            data: []
        },
        {
            name: '累计治愈',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: []
        },
        {
            name: '累计死亡',
            type: 'line',
            smooth: true,
            data: []
        },
    ]
    };
left1_echart.setOption(left1_option);

function set_left1() {
    $.ajax({
        url: "/get_china_total_trend",
        type: "post",
        success: function (res) {
            left1_option.xAxis.data = res.days;
            left1_option.series[0].data = res.confirm;
            left1_option.series[1].data = res.suspect;
            left1_option.series[2].data = res.heal;
            left1_option.series[3].data = res.dead;
            left1_echart.setOption(left1_option);
        }
    })
}
