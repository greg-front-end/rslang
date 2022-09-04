import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { getAgregatedCard } from './api/getAggregatedCard';
import { getCard } from './api/getCard';
import { getUserStatistic } from './api/getUserStatistic';
import { store } from './store/store';
import { isUserLogIn } from './utils/isUserLogIn';
import { App } from './App';

import './index.css';

if (isUserLogIn()) {
  store.dispatch(getAgregatedCard());
  store.dispatch(getUserStatistic());
} else {
  store.dispatch(getCard());
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
