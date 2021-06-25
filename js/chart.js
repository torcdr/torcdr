var year = [2015,2016,2017,2018,2019,2020];
	var gdp = [5.5,6.9,3.4,8,12,9];

// data chart2
	var ifr =[10,8,12,9,13,7.9];  

// data chart2
	var db =[10,8,12,9,13,7.9]; 

	// data chart4
	var province = ["VTE","PHO","SVN","LPB"];
	var pop = [820000,580000,640000,730000];
	var province2 =["VTE","PHO","LNT","BOK","ODX","XBL","LBP","XEK","HOP","VTP","BKX","KHM","SVK","SVN","XEK","CHP","ATP","XSB"];
	var b2019 = [4,5,7,4,9,7,9,6,7,10,5,6,15,4,2,11,4,2]
	var b2020 = [6,7,9,6,11,9,11,8,9,12,7,8,17,6,4,13,6,4]

	//console. log(province2,b2019,b2020)


	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx,{
		type: "line",   //chart type
		data:{
			//dataset and options
			labels: year,
			datasets:[{
				label: "GDP growth rate",
				data : gdp,
				borderColor:"#ec1009",
				fill: false,
				lineTension:0,

			}]

		},

		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero: true,
						stepSize:2,
						maxTicksLimit:6,
					}
				}]
			},
			legend:{
				display: false,
			}
		}


	});

//end of chart 1

//row chart3
var ctx = document.getElementById("pieChart");
var pieChart = new Chart(ctx,{
	type: "pie",
	data:{
		labels: year,
		datasets:[{
			label: "IFR",
			data: ifr,
			backgroundColor:["#85d74c","#4c7fd7","#874cd7","#58166a","#10dd30","#dd104a"],
		}]
	},

	options:{
		legend:{
			position:"left",
		}
	}

})

//end of piechart 3


//chart2

var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx,{
	type: "bar",
	//  plugins: [ChartDataLabels],
	data:{
		labels: year,
		datasets:[{
			label: "Inftion rate",
			data: db,
			backgroundColor:["#85d74c","#4c7fd7","#874cd7","#58166a","#10dd30","#dd104a"],

		}]
	},
	

	options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero: true,
						stepSize:2,
						maxTicksLimit:6,
					}
				}]
			},
			legend:{
				display:false,
			}
		}

});
//End of pie chart2

var ctx = document.getElementById("pChart");
var pChart = new Chart(ctx,{
	type: "horizontalBar",
	data:{
		labels: province,
		datasets:[{
			label: "population",
			data: pop,
			backgroundColor:["#0000c2","#4c7fd7","#874cd7","#58166a","#10dd30","#dd104a"],

		}]
	},
	options:{
		legend:{
				display:false,
			}

	}
	


});

var ctx = document.getElementById ("bChart");
var bChart = new Chart(ctx,{
	type:"bar",
	data:{
		labels: province2,
		datasets:[{
			label: "Birth rate 2019",
			data: b2019,
			backgroundColor:"#0000e0",
		},
		{ 
			lebal:"Birth rate 2020",
			data: b2020,
			backgroundColor:"#4169e1",

		}]
	},
	options:{
		scales:{
			yAxes:[{
				ticks:{
					beginAtZero:true,
				}
			}]
		},
		legend:{
			lebals:{
				fontcolor:"009e00",
			}
		}
	}


	});