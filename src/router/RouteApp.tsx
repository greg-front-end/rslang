import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { LogIn } from '../components/LogIn/LogIn';
import { SignIn } from '../components/SignIn/SignIn';
import { useLogOutAfterTokenExp } from '../hooks/useLogOutAfterTokenExp';
import { About } from '../pages/About/About';
import { AudioCall } from '../pages/AudioCall/AudioCall';
import { Games } from '../pages/Games/Games';
import { Main } from '../pages/Main/Main';
import { Sprint } from '../pages/Sprint/Sprint';
import { Statistics } from '../pages/Statistics/Statistics';
import { TextBook } from '../pages/TextBook/TextBook';

export const RouteApp = () => {
  const isUserLoggined = useLogOutAfterTokenExp();
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {
          isUserLoggined

            ? (
              <Route
                index
                element={<Statistics />}
              />
            )
            : (
              <Route
                index
                element={<Main />}
              />
            )
        }
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
          path="about"
          element={isUserLoggined ? <About /> : <Main />}
        />
        <Route
          path="log-in"
          element={<LogIn />}
        />
        <Route
          path="register"
          element={<SignIn />}
        />
      </Route>
    </Routes>
  );
};
