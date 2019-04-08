import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      graphType: true
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };
  render() {
    const graphData = {};
    return (
      <div className="Chart">
        <Bar
          data={this.state.chartData}
          width={1000}
          height={250}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Items Removed By Category",
              fontSize: 20
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
