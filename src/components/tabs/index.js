/**
 * Header module
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { number, arrayOf, shape, string } from 'prop-types';

// Styles
import styles from './styles.module.scss';

const { REACT_APP_HOMEPAGE = '/' } = process.env;
const isActive = (id, pathname, key) => () => (
  pathname === `${REACT_APP_HOMEPAGE}${id}`
  || (pathname === `${REACT_APP_HOMEPAGE}` && !key)
);

const Tabs = ({ tabs, location: { pathname } }) => {

    return (
    <nav>
      <ul className={styles.Tabs} >
        {
          !!tabs.length &&
          tabs.map(({id, title}, key) => (
            <li key={id}>
              <NavLink
                isActive={isActive(id, pathname, key)}
                to={`/${id}`}
              >
                {title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  tabs: arrayOf(
    shape({
      id: string,
      title: string,
      order: number,
      path: string,
    }),
  ),
  pathname: string,
};

Tabs.defaultProps = {
  tabs: [],
};


export default withRouter(Tabs);
