import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Auth } from '../components/Auth/Auth';
import { Layout } from '../components/Layout/Layout';
import { LogIn } from '../components/LogIn/LogIn';
import { About } from '../pages/About/About';
import { AudioCall } from '../pages/AudioCall/AudioCall';
import { Games } from '../pages/Games/Games';
import { Main } from '../pages/Main/Main';
import { Sprint } from '../pages/Sprint/Sprint';
import { Statistics } from '../pages/Statistics/Statistics';
import { TextBook } from '../pages/TextBook/TextBook';
import { isUserLogIn } from '../utils/isUserLogIn';

export const RouteApp = () => (
  <Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={isUserLogIn() ? <Statistics /> : <Main />}
      />
      <Route
        path="textbook"
        element={<TextBook />}
      />
      <Route
        path="games"
        element={<Games />}
      />
      <Route
        path="games/sprint"
        element={<Sprint />}
      />
      <Route
        path="games/audiocall"
        element={<AudioCall />}
      />
      <Route
        path="About"
        element={<About />}
      />
      <Route
        path="log-in"
        element={<LogIn />}
      />
      <Route
        path="register"
        element={<Auth />}
      />
    </Route>
  </Routes>
);
