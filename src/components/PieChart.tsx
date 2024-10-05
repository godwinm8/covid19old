import React from 'react';
import Plot from 'react-plotly.js';

const PieChart: React.FC<{ data: any }> = ({ data }) => {
  const { totalCases, activeCases, recovered, deaths } = data;
  const pieData = [totalCases, activeCases, recovered, deaths];
  const pieLabels = ['Total Cases','Active Cases', 'Recovered', 'Deaths'];

  return (
    
    <Plot
      data={[
        {
          values: pieData,
          labels: pieLabels,
          type: 'pie',
        },
      ]}
      layout={{ title: 'COVID-19 Cases Distribution' }}
    />
    
  );
};

export default PieChart;
