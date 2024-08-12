google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Tarea', 'Hora por Dia'],
    ['Trabajar', 11],
    ['Comer', 2],
    ['Estudiar', 2],
    ['Ver TV', 2],
    ['Dormir', 7]
  ]);

  var options = {
    title: 'Actividades diarias',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}