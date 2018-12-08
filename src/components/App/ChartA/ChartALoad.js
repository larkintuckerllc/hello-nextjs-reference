import React from 'react';
import { Pie } from 'react-chartjs-2';
import Page from '../../Page';

const DATA = {
  datasets: [
    {
      backgroundColor: ['red', 'yellow', 'blue'],
      data: [1, 2, 3],
    },
  ],
  labels: ['Red', 'Yellow', 'Blue'],
}; 

const ChartALoad = () => (
  <Page>
    <Pie data={DATA} />
  </Page>
);

export default ChartALoad;
