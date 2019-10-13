/**
 * Header module
 */
import React from 'react';

import logo from '../../assets/backendless.svg';
// Styles
import styles from './styles.module.scss';


const Header = () => (
  <header className={styles.Header} >
    <img src={logo} alt="Backendless logo" />
    <h1>Test task</h1>
  </header>
);


export default Header;
