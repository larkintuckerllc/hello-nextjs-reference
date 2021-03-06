import { Spin } from 'antd';
import React from 'react';
import styles from './styles.module.css';

const Loading = () => (
  <div id={styles.root}>
    <Spin size="large" />
  </div>
);

export default Loading;
