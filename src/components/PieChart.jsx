import React, { Component } from 'react'
import Chart from "react-apexcharts";

export default class PieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [44, 55, 13, 43, 22],
          options: {
            chart: {
              type: 'pie',
            }, 
            legend: {
                show: false
            }, 
            responsive: [
              {
              breakpoint: 570,
              options: {
                  chart:{
                      width:400,
                  }
              },
          }],
          responsive: [{
            breakpoint: 470,
            options: {
                chart:{
                    width:350,
                }
            },
        }],
        responsive: [{
          breakpoint: 419,
          options: {
              chart:{
                  width:300,
              }
          },
      }],
      responsive: [{
        breakpoint: 362,
        options: {
            chart:{
                width:250,
            }
        },
    }],

          },
        
        
        };
      }

  render() {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
        <Chart 
        className="chatbtn"
        options={this.state.options}
        series={this.state.series}
        type="pie"
        width="100%"
        height='190%'
      /></div>
    )
  }
}
