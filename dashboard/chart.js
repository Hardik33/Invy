
window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Monthly Sales Data"
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      prefix: "₹",
      labelFormatter: addSymbols
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [
    {
      type: "column",
      name: "Sales",
      showInLegend: true,
      xValueFormatString: "MMMM YYYY",
      yValueFormatString: "₹#,##0",
      dataPoints: [
        { x: new Date(2022, 0), y: 20000 },
        { x: new Date(2022, 1), y: 30000 },
        { x: new Date(2022, 2), y: 25000 },
        { x: new Date(2022, 3), y: 70000, indexLabel: "High Renewals" },
        { x: new Date(2022, 4), y: 50000 },
        { x: new Date(2022, 5), y: 35000 },
        { x: new Date(2022, 6), y: 30000 },
        { x: new Date(2022, 7), y: 43000 },
        { x: new Date(2022, 8), y: 35000 },
        { x: new Date(2022, 9), y:  30000},
        { x: new Date(2022, 10), y: 40000 },
        { x: new Date(2022, 11), y: 50000 }
      ]
    }, 
   
    {
      type: "area",
      name: "Profit",
      markerBorderColor: "white",
      markerBorderThickness: 2,
      showInLegend: true,
      yValueFormatString: "₹#,##0",
      dataPoints: [
        { x: new Date(2022, 0), y: 5000 },
        { x: new Date(2022, 1), y: 7000 },
        { x: new Date(2022, 2), y: 6000},
        { x: new Date(2022, 3), y: 30000 },
        { x: new Date(2022, 4), y: 20000 },
        { x: new Date(2022, 5), y: 15000 },
        { x: new Date(2022, 6), y: 13000 },
        { x: new Date(2022, 7), y: 20000 },
        { x: new Date(2022, 8), y: 15000 },
        { x: new Date(2022, 9), y:  10000},
        { x: new Date(2022, 10), y: 19000 },
        { x: new Date(2022, 11), y: 22000 }
      ]
    }]
  });
  chart.render();
  
  function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
  
    if(order > suffixes.length - 1)                 
      order = suffixes.length - 1;
  
    var suffix = suffixes[order];      
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  
  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
  
  }