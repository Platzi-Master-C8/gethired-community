import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import styled from '@emotion/styled';


export const Wrapper = styled.div`
  grid-area: graph;
  width: 100%;
  min-width: 55rem;
  max-height: 60rem;
  align-self: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  min-width: 58rem;
  padding-right: 3rem;
  @media (max-width: 1100px) {
    padding-right: 7rem;
  }
`;

const UserGraph = ({ activity }) => {
  if (activity) {
    let arrayNew = [
      {
      "2021-12-13": 7
      },
      {
      "2021-12-14": 5
      },
      {
      "2021-12-15": 2
      },
      {
      "2021-12-16": 3
      },
      {
      "2021-12-20": 9
      },
      {
      "2021-12-24": 8
      },
      {
      "2021-12-28": 6
      }
    ]
    let keys = arrayNew.map(e => Object.keys(e))
    let values =  arrayNew.map(e => Object.values(e))
    console.log(values)
    return (
      <Wrapper>
        <Container>
          <Bar className='graph'
          width={600}
          height={300}
          data={{
            labels: keys.map(item =>
              new Intl.DateTimeFormat('es-MX', { month: 'long', day: 'numeric' })
                .format(new Date(item))),
            datasets: [
              {
                label: 'Retos completados',
                data: values.map(item => item),
                backgroundColor: '#2196F3',
                borderColor: '#A779FF',
                borderWidth: 1,
                borderRadius: 40,
                barPercentage: 0.5,
                barThickness: 32
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
      </Container>
        </Wrapper>
    )

  } else {
    return null;
  }
}

export default UserGraph;
