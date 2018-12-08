import React from 'react';
import { Pie } from 'react-chartjs-2';
import Page from '../../Page';

const DATA = {
  datasets: [
    {
      backgroundColor: ['red', 'yellow', 'blue'],
      data: [3, 2, 1],
    },
  ],
  labels: ['Red', 'Yellow', 'Blue'],
}; 

const ChartBLoad = () => (
  <Page>
    <Pie data={DATA} />
  </Page>
);

export default ChartBLoad;
