const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const data = {
  labels: labels,
  datasets: [
      {
          label: 'Mujeres',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
          ],
          borderWidth: 1
      },
      {
          label: 'Hombres',
          data: [45, 69, 60, 91, 46, 65, 50],
          backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: [
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 99, 132)',
              'rgb(201, 203, 207)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)'
          ],
          borderWidth: 1
      }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};



var myChart = new Chart(
  document.getElementById("myChart"),
  config
);














// Data de grafico de radar

const data2 = {
    labels: [
      'Comer',
      'Refrescarse',
      'Dormir',
      'Diseñar',
      'Programar',
      'Ciclismo',
      'Correr'
    ],
    datasets: [{
      label: 'Mujeres',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Hombres',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };


  const config2 = {
    type: 'radar',
    data: data2,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };


var myChart2 = new Chart(
    document.getElementById('myChartRadar'),
    config2
);




