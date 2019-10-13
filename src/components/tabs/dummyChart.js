import React from 'react';

// Styles
import styles from './dummyChart.module.scss';

const DummyChart = () => (
  <div className={styles.DummyChart}>
    <div className={styles.title} >Dummy Chart</div>
    <div className={styles.chart} >100%</div>
  </div>
);

export default DummyChart;
