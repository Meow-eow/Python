var world_echart = echarts.init(document.getElementById("mid2"), "dark");
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
                console.log(outdata);

var world_option = {
    backgroundColor:'', //设置无背景色
    tooltip: {
        show: true,
        formatter: function(params) {
            if(params.value){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
        }
    },
    title: {
        text:"全球疫情图",
        left: 'center',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['世界疫情图']
    },
     geo: {
        map: 'world',
        roam: false,//不开启缩放和平移
        // zoom: 1.1,//视角缩放比例
        label: {
            normal: {
                show: false,
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
    visualMap: {
        type: 'piecewise',
        pieces: [
            {min: 20000000, max: 40000000, label: '>=20000000', color: '#000079'},
            {min: 2000000, max: 20000000, label: '确诊2000000-20000000', color: '#004B97'},
            {min: 1000000, max: 2000000, label: '确诊1000000-2000000人', color: '#0066CC'},
            {min: 10000, max: 1000000, label: '确诊10000-1000000人', color: '#005AB5'},
            {min: 1000, max: 9999, label: '确诊1000-9999人', color: '#0072E3	'},
            {min: 100, max: 999, label: '确诊100-999人', color: '#CA8EFF'},
            {min: 10, max: 99, label: '确诊10-99人', color: '#AAAAFF'},
            {min: 0, max: 9, label: '确诊0-9人', color: '#D2E9FF'},
        ],
        color: ['#E0022B', '#E09107', '#A3E00B'],
        textStyle: {
            color: "white"
        },
    },
    series: [{
        name: 'World Population (2010)',
        type: 'map',
        mapType: 'world',
        showLegendSymbol:false,
        roam: true,
        itemStyle: {emphasis: {label: {show: true}}},
        data: outdata
    }]
};
world_echart.setOption(world_option);
                },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });