import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


export default (tabs) => (
  <Suspense fallback={<div>Loading...</div>} >
    <Switch>
      {
        tabs.map(({ id, path }) => (
          id &&
          <Route
            key={id}
            exact
            path={`/${id}`}
            component={lazy(() => import(`./components/${path}`))}
          />
        ))
      }
    </Switch>
  </Suspense>
);