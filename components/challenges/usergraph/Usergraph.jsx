import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import styles from '../../../styles/Usergraph.module.scss';
import position from '../../../styles/Profile.module.scss';

const UserGraph = ({ activity }) => {
  if (activity) {

    return (
      <div className={position.igraph}>
        <div className={styles.container_graph}>
        <Bar
          className='graph'
          data={{
            labels: activity.map(item => new Intl.DateTimeFormat('es-MX', { month: 'long', day: 'numeric' }).format(new Date(item.day))),
            datasets: [
              {
                label: 'Retos completados',
                data: activity.map(item => item.points),
                backgroundColor: '#2196F3',
                borderColor: '#A779FF',
                borderWidth: 1,
                borderRadius: 40
              }
            ]
          }}
          options={{
            layout: {
              padding: {
                left: 10,
                right: 10
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Actividad Semanal',
                padding: 30,
                color: '#12619c',
                font: {
                  size: 26
                }
              },
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: 'rgba(85, 91, 255, 1)',
                position: 'average',
                titleFont: {
                  size: 20
                },
                titleAlign: 'center',
                displayColors: false,
                bodyFont: {
                  size: 20
                },
                padding: 10
              }
            },
            elements: {
              bar: {
                inflateAmount: 1,
                borderSkipped: 'bottom',
                hoverBorderWidth: 5,
                hoverBackgroundColor: '#A779FF'
              }
            },
            scales: {
              xAxes: {
                grid: {
                  display: false
                }
              },
              yAxes: {
                ticks: {
                  display: false
                },
                beginAtZero: true,
                grid: {
                  display: false
                }
              }
            }
          }}
        />
      </div>
        </div>
    )

  } else {
    return null;
  }
}

export default UserGraph;
