/**
 * Layout module
 * Just styling
 */
import React from 'react';
import { node } from 'prop-types';

import styles from './styles.module.scss';


const Layout = ({ children }) => (
  <div className={styles.Layout} >{children}</div>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
