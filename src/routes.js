/**
 * Module builds routing
 */
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


const SomethingWentWrong = lazy(() => import('./components/common/SomethingWrong/index'));

export default (tabs) => tabs.length ? (
  <Suspense fallback={<div>Loading...</div>} >
    <Switch>
      {
        tabs
          .map(({ id, path }, key) => (
            id &&
            <Route
              key={id}
              exact
              path={key ? `/${id}`: [`/${id}`, '/']}
              component={lazy(() => import(`./components/${path}`))}
            />
          ))
      }
      <Route
        key="NotFound"
        path="*"
        component={lazy(() => import('./components/common/NotFound/index'))}
      />
    </Switch>
  </Suspense>
) : (
  <Suspense fallback={<div>Loading...</div>} >
    <SomethingWentWrong />
  </Suspense>
);
