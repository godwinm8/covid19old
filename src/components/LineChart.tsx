import React from 'react';
import Plot from 'react-plotly.js';

const LineChart: React.FC<{ data: any[] }> = ({ data }) => {
  const dates = data.map(item => item.date);
  const totalCases = data.map(item => item.totalCases);
  const activeCases = data.map(item => item.activeCases);
  const recovered = data.map(item => item.recovered);
  const deaths = data.map(item => item.deaths);

  return (
    
    <Plot
      data={[
        { x: dates, y: totalCases, type: 'scatter', mode: 'lines', name: 'Total Cases' },
        { x: dates, y: activeCases, type: 'scatter', mode: 'lines', name: 'Active Cases' },
        { x: dates, y: recovered, type: 'scatter', mode: 'lines', name: 'Recovered' },
        { x: dates, y: deaths, type: 'scatter', mode: 'lines', name: 'Deaths' },
      ]}
      layout={{ title: 'COVID-19 Cases Over Time' }}
    />
    
  );
};

export default LineChart;
