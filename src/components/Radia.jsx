import React, { Component } from 'react'
import Chart from "react-apexcharts";
import './chart.css'

export class Radia extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
          }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
          }],
          options: {
            chart: {
              height: 350,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              }
            },
            responsive: [{
                breakpoint: 880,
                options: {
                    chart:{
                        width:300,
                    }
                },
            }],
            responsive: [{
                breakpoint: 399,
                options: {
                    chart:{
                        width:200,
                    }
                },
            }],
            stroke: {
              width: 2
            },
            fill: {
              opacity: 0.1
            },
            markers: {
              size: 0
            },
            xaxis: {
              categories: ['2011', '2012', '2013', '2014', '2015', '2016']
            }
          },
        
        
        };
      }
  render() {
    return (
        <div> 
        <Chart 
        className="chabtn"
        options={this.state.options}
        series={this.state.series}
        type="radar"
        width="100%"
        height={'300px'}
      /></div>
    )
  }
}

export default Radia