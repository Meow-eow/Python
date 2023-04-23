left2_echart = echarts.init(document.getElementById('left2'), 'dark');
left2_option = {
    title: {
        // text: '全国新增趋势',
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
        data: ['新增确诊', '新增疑似', '新增治愈', '新增死亡'],
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
            name: '新增确诊',
            type: 'line',
            smooth: true,
            data: []
        },
        {
            name: '新增疑似',
            type: 'line',
            smooth: true,
            data: []
        },
        {
            name: '新增治愈',
            type: 'line',
            smooth: true,
            data: []
        },
        {
            name: '新增死亡',
            type: 'line',
            smooth: true,
            data: []
        },
    ]
    };
left2_echart.setOption(left2_option);

function set_left2() {
    $.ajax({
        url: "/get_china_add_trend",
        type: "post",
        success: function (res) {
            left2_option.xAxis.data = res.days;
            left2_option.series[0].data = res.confirm;
            left2_option.series[1].data = res.suspect;
            left2_option.series[2].data = res.heal;
            left2_option.series[3].data = res.dead;
            left2_echart.setOption(left2_option);
        }
    })
}
