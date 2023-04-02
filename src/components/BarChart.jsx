import React, { Component } from 'react'
import Chart from "react-apexcharts";


export default class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
          }, 
          ],
        options: {
            chart: {
              type: 'bar',
              height: 500,
            },

            plotOptions: {
              bar: {
                horizontal: true,
                rowsWidth: '10%',
                dataLabels: {
                  position: 'top', 
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: -6,
              style: {
                fontSize: '12px',
                colors: ['#fff']
              }
            },
             responsive: [{
              breakpoint:880,
              options: {
                  chart:{
                      width:100,
                  }
              },
          }],
          responsive: [{
            breakpoint:800,
            options: {
                chart:{
                    width:600,
                }
            },
        }],
        responsive: [{
          breakpoint:699,
          options: {
              chart:{
                  width:500,
              }
          },
      }],
            responsive: [{
              breakpoint:590,
              options: {
                  chart:{
                      width:400,
                      height:400,
                  }
              },
          }],
          responsive: [{
            breakpoint:516,
            options: {
                chart:{
                    width:350,
                    height:400,
                }
            },
        }], 
        responsive: [{
          breakpoint:460,
          options: {
              chart:{
                  width:300,
                  height:400,
              }
          },
      }],
      responsive: [{
        breakpoint:399,
        options: {
            chart:{
                width:250,
                height:500,
            }
        },
    }],
    responsive: [{
      breakpoint:360,
      options: {
          chart:{
              width:200,
              height:500,
          }
      },
  }],
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff']
            },
            tooltip: {
              shared: true,
              intersect: false
            },
            xaxis: {
              categories: ['Italy',"Japan","China","Canada","France","Germany","South Korea","Netherlands","united state","united kingdom"],
              colors:['#fff'], 
            },
            yaxis: {
              categories: [0, 300,600,900,1200,1500],
            },
          },
        };

    }
  render() {
    return (
        <div>
        <Chart 
        className="chatbtn"
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="100%"
      /></div>
    )
  }
}

