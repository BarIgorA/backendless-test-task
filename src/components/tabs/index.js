/**
 * Header module
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { number, arrayOf, shape, string } from 'prop-types';

// Styles
import styles from './styles.module.scss';


const Tabs = ({ tabs }) => (
  <ul className={styles.Tabs} >
    {
      !!tabs.length &&
      tabs
        .sort(
          (a, b) => (
            Number.isSafeInteger(a.order) && Number.isSafeInteger(b.order)
              ? a.order - b.order
              : 0
          ),
        )
        .map(({id, title}) => (
        <li key={id}>
          <Link to={`/${id}`}>{title}</Link>
        </li>
      ))
    }
  </ul>
);

Tabs.propTypes = {
  tabs: arrayOf(
    shape({
      id: string,
      title: string,
      order: number,
      path: string,
    }),
  ),
};

Tabs.defaultProps = {
  tabs: [],
};


export default Tabs;
