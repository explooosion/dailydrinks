import React, { useReducer } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ContextStore, { initialState } from './store';
import reducer from './reducers';

import Routes from './routes';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const renderRoute = route => {
    const { key, path, exact, component: Component, title } = route;
    return (
      <Route
        key={key}
        exact={exact}
        path={path}
        title={title}
        render={props => (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Component {...props} />
          </>
        )}
      />
    );
  }

  return (
    <ContextStore.Provider value={{ ...state, dispatch }}>
      <Router>
        <Switch>
          {Routes.map(renderRoute)}
        </Switch>
      </Router>
    </ContextStore.Provider>
  );
}

export default App;
