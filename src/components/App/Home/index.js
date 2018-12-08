import React from 'react';
import Page from '../../Page';
import cat from './cat.jpg';
import styles from './styles.module.css';

const Home = () => (
  <Page>
    <div id={styles.rootBody}>
      <img id={styles.rootBodyImage} alt="cat" src={cat} />
    </div>
  </Page>
);

export default Home;