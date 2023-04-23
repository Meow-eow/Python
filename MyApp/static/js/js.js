
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();

function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        var dt1 = []
        var data1=[]
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/require1",
            success : function(res) {
//                console.log(res);
               var len = res.length;
                for(var i = 0; i < len; i++)
                {
                    dt1.push(res[i]["province"]);
                    data1.push(res[i]["comfirmAdd"]);
                }

option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: dt1,
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
                rotate:60,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '10',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
        type: 'bar',
        data: data1,
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        var dt2 = []
        var data2=[]
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/require2",
            success : function(res2) {
//                console.log(res2);
               var len = res2.length;
                for(var i = 0; i < len; i++)
                {
                    dt2.push(res2[i]["province"]);
                    data2.push(res2[i]["now_confirm"]);
                }

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: dt2,
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
       
        type: 'bar',
        data: data2,
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#27d08a',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        var date5 = []
        var dt5 = []
        var data5=[]
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/right2",
            success : function(res5) {
//                console.log(res5);
               var len = res5.length;
                for(var i = 0; i < len; i++)
                {
                    date5.push(res5[i]["date"]);
                    dt5.push(res5[i]["dead"]);
                    data5.push(res5[i]["heal"]);
                }

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		legend: {
    top:'0%',
        data:['deadRate','healRate'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
        grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel:  {
                interval: 0,
                rotate:50,
                show: true,
                splitNumber: 15,
            textStyle: {
 				color: "rgba(255,255,255,.6)",
				fontSize:10,
                },
            },
        axisLine: {
			lineStyle: {
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: date5
    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,
    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: 'dead',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: dt5
    },
{
        name: 'heal',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: data5
    },
		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });

    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var pro4 = []
        var dt4 = []
        var data4=[]
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/right1",
            success : function(res4) {
//                console.log(res4);
               var len = res4.length;
                for(var i = 0; i < len; i++)
                {
                    pro4.push(res4[i]["province"]);
                    dt4.push(res4[i]["deadRate"]);
                    data4.push(res4[i]["healRate"]);
                }

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		legend: {
    top:'0%',
        data:['deadRate','healRate'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
        grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: pro4
    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,
    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: 'deadRate',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: dt4
    }, 
{
        name: 'healRate',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: data4
    },
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        var dt6 = []
        var data6=[]
        //发送ajax请求
        $.ajax({
            //请求方式
            type : "POST",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://127.0.0.1:5000/right3",
            success : function(res6) {
//                console.log(res6);
               var len = res6.length;
                for(var i = 0; i < len; i++)
                {
                    dt6.push(res6[i]["province"]);
                    data6.push(res6[i]["accu_diagnosis"]);
                }
option = {
//    backgroundColor: 'black',
    legend:{
         orient: 'vertical ', // 'vertical'
        x: 'left', // 'center' | 'left' | {number},
        y: '10', // 'center' | 'bottom' | {number}
        padding: 0,    // [5, 10, 15, 20]
        itemGap: 8,
        textStyle: {color: '#c3cad9'},
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
            selectedMode: 'single',
            selectedOffset: 10,
        clockwise: true,
        center: ['50%', '50%'],
        color: ['#43cadd','#3893e5','#FCC708','#03B48E','#467500','#80FFFF','#FE5050','#A23400','#007979','#AAAAFF',
//                '#E800E8','#007979','#02DF82','#000079','#7B7B7B','#AD5A5A','#808040','#FF9797','#4B0091','#2F0000',
//                '#006030','#FF5809','#FFFF6F','#FBFE27','#9AFF02','#FFFFDF'
], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [
        {value: 1266, name: '内蒙古'},
        {value: 996, name: '北京'},
        {value: 6575, name: '吉林'},
        {value: 1286, name: '山东'},
        {value: 2141, name: '广东'},
        {value: 974, name: '江苏'},
        {value: 1412, name: '河北'},
        {value: 1493, name: '浙江'},
        {value: 50419, name: '湖北'},
        {value: 2510, name: '陕西'}
        ]
        .sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                // formatter: ['{c|{b}{d}%}', '{b|{b}}'].join('\n'),
               // formatter: ['{b|{b}{d}%}', '{c|{c}万元}'].join('\n'),
                rich: {
                    b: {
                        color: '#d9efff',
                        fontSize: 15,
                        height: 40
                    },
                    c: {
                        color: '#fff',
                        fontSize: 14,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                },
            }
        },
        itemStyle:{
          borderWidth:'20',
          color:'pink',
          borderColor:'#FFF',
          normal:{
          borderWidth:'4',
          borderColor:'rgba(0,0,0,2)',
          },
        },
        labelLine: {
            normal: {
                backgroundColor:'yellow',
                borderColor:'skyblue',
                borderWidth:10,
                lineStyle: {
                borderColor:'skyblue',
                borderWidth:10,
                backgroundColor:'yellow',
            }
        },
        }
    }]
};
//           myChart.setOption({ //加载数据图表
//	         series: [{
//	              data: {name:res6.province,value:res6.accu_diagnosis}
//	              }]
//	         });
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

        },
            //请求失败，包含具体的错误信息
            error : function(e){
                console.log(e.status);
                console.log(e.responseText);
            }
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
option = {

	    title: [{
        text: '2020年',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['累计确诊','累计死亡','累计治愈','现有确诊'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'2020年',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:130, name:'累计确诊'},
                {value:0, name:'累计死亡'},
                {value:127, name:'累计治愈'},
                {value:3, name:'现有确诊'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '2021年',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['累计确诊','累计死亡','累计治愈','现有确诊'],
        textStyle: {
            color: 'rgba(255,255,255,.5)',
		    fontSize:'12',
        }
    },
    series: [
        {
        	name:'2021年',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:421, name:'累计确诊'},
                {value:0, name:'累计死亡'},
                {value:405, name:'累计治愈'},
                {value:26, name:'现有确诊'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '2022年',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['累计确诊','累计死亡','累计治愈','现有确诊'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'2022年',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:74344, name:'累计确诊'},
                {value:3930, name:'累计死亡'},
                {value:59980, name:'累计治愈'},
                {value:10434, name:'现有确诊'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









