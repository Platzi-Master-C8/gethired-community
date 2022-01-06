import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import styles from '../../../styles/Usergraph.module.scss';
import position from '../../../styles/Profile.module.scss';

const UserGraph = ({ activity }) => {
  if (activity) {
    let values = Object.values(activity);
    let keys = Object.keys(activity);
    console.log(keys);

    return (
      <div className={position.igraph}>
        <div className={styles.container_graph}>
        <Bar className='graph'
          data={{
            labels: keys.map(item => new Intl.DateTimeFormat('es-MX', { month: 'long', day: 'numeric' }).format(new Date(item))),
            datasets: [
              {
                label: 'Retos completados',
                data: values.map(item => item),
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
                left: 5,
                right: 5
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Actividad Semanal',
                padding: 20,
                color: '#12619c',
                font: {
                  size: 25
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
                padding: 20
              }
            },
            elements: {
              bar: {
                inflateAmount: 0.5,
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
