import React, { Component } from 'react'
import Chart from "react-apexcharts";

export default class PieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [44, 55, 13, 43, 22],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            }, 
            legend: {
                show: false
            }, 
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width:'100%'
                },
              }
            }]
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
        width="300px"
      /></div>
    )
  }
}
