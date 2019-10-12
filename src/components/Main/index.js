/**
 * Main module
 */
import React from 'react';
import { element } from 'prop-types';

// Styles
import styles from './styles.module.scss';


const Main = ({ children }) => (
  <main className={styles.Main} >
    {children}
  </main>
);

Main.propTypes = {
  children: element.isRequired,
};


export default Main;
