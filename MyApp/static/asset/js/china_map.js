var dataList = [
    {name: '山西', value: 133, suspect: 0, dead: 0, heal: 133},
    {name: '湖北', value: 8888, suspect: 10, dead: 120, heal: 4000},
];
var china_echart = echarts.init(document.getElementById('mid2'), 'dark');
var option = {
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + '<br/>' + '确诊人数 : '
                + params.value + '<br/>' + '死亡人数 : '
                + params['data'].dead + '<br/>' + '治愈人数 : '
                + params['data'].heal + '<br/>' + '疑似患者人数 : '
                + params['data'].suspect;
        }//数据格式化
    },
    title: {
            text: '中国疫情图',
            left: 'center'
          },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
    },
    visualMap: {
        type: 'piecewise',
        pieces: [
            {min: 10000, max: 1000000, label: '>=10000人', color: '#4e160f'},
            {min: 1000, max: 9999, label: '确诊1000-9999人', color: '#974236'},
            {min: 100, max: 999, label: '确诊100-999人', color: '#CC2929'},
            {min: 10, max: 99, label: '确诊10-99人', color: '#ee7263'},
            {min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7'},
        ],
        color: ['#E0022B', '#E09107', '#A3E00B'],
        textStyle:{
            color: "white"
        }
    },
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom: 1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize: '10',
                color: 'rgba(0,0,0,0.7)'
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series: [
        {
            name: '信息量',
            type: 'map',
            geoIndex: 0,
            data: dataList,
        }
    ]
};
china_echart.setOption(option);

function set_mid2() {
    $.ajax({
        url: "/get_china_map_data",
        type: "post",
        success: function (res) {
            if (res.code == 200) {
                option.series[0].data = res.data;
                china_echart.setOption(option);
            } else {
                console.log('china_map', res.data)
            }
        },
    })
}