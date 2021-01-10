export const ChartDialyDashboard = {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '17h'],
        datasets: [
            { // one line graph
              label: 'Income',
              data: [5, -2, 1, 3, -4, 1.27, 3.50, 0.42, -5, 0.86, 0.60,],
              backgroundColor: [
                'rgba(54,73,93,.5)', // Blue
                'rgba(54,73,93,.5)',
                'rgba(54,73,93,.5)',
                'rgba(54,73,93,.5)',
                'rgba(54,73,93,.5)',
                'rgba(54,73,93,.5)',
                'rgba(54,73,93,.5)',
                'rgba(54,73,93,.5)'
              ],
              borderColor: [
                '#36495d',
                '#36495d',
                '#36495d',
                '#36495d',
                '#36495d',
                '#36495d',
                '#36495d',
                '#36495d',
              ],
              borderWidth: 3
            },
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                padding: 25,
              }
            }]
          }
        }
      }
      
      export default ChartDialyDashboard;