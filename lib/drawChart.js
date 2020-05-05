function drawChart(divId, options) {
  Chart.defaults.global.animation.duration = 3000;
    var lineChartData = {
        labels: options.labels,
        datasets: [{
          label: options.FirstDataSet,
          borderColor: "#f00",
          backgroundColor: "#f00",
          fill: false,
          data: options.dataSet1,
          yAxisID: 'y-axis-1',
        }, {
          label: options.SecondDataSet,
          borderColor: "#000",
          backgroundColor: "#000",
          fill: false,
          data: options.dataSet2,
          yAxisID: 'y-axis-1'
        }]
      };

      const canvas = document.createElement('CANVAS');
      document.getElementById(divId).appendChild(canvas);

      var ctx = canvas.getContext('2d');
      window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
          responsive: true,
          hoverMode: 'index',
          stacked: false,
          title: {
            display: true,
            text: options.titleText
          },
          scales: {
            yAxes: [{
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-1',
            }
            ],
          }
        }
      });
}

function add(a,b) {
  return a + b;
}

export default drawChart