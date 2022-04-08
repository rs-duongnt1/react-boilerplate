import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes());
  return routing;
}

// class AppWrapper =

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default AppWrapper;
