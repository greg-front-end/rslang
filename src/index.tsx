import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { getAgregatedCard } from './api/getAggregatedCard';
import { getCard } from './api/getCard';
import { store } from './store/store';
import { isUserLogIn } from './utils/isUserLogIn';
import { App } from './App';

import './index.css';

isUserLogIn() ? store.dispatch(getAgregatedCard()) : store.dispatch(getCard());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
