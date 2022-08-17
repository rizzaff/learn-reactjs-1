import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,
        Legend, Tooltip } from 'recharts';

class BarChartComponent extends Component {
  render() {
    return (
        <>  
            <h1><center>coronavirus</center></h1>
            <BarChart width={1080} height={720} data={this.props.data.slice(0,20)} margin={{top: 5, right: 30, left: 50, bottom: 200}}>
                <CartesianGrid />
                <XAxis dataKey="Combined_Key" angle={-45} textAnchor="end" interval={0} axisLine={false} tickLine={false} />
                <YAxis />
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right"/>
                <Bar dataKey="Deaths" stackId="a" fill="#8884d8" />
                <Bar dataKey="Confirmed" stackId="a" fill="#82ca9d" />
            </BarChart>
        </>
    );
  }
}

export default BarChartComponent;