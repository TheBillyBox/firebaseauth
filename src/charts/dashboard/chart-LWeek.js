export const ChartLWeek = {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri',],
        datasets: [
            { // one line graph
              label: 'Income',
              data: [2, 5, 2, 10, 11,],
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
      
      export default ChartLWeek;