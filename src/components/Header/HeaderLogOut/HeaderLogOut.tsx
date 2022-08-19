import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderLogOut = () => (
  <>
    <h1>Header user log out</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="textbook">TextBook</Link>
      <Link to="games">Games</Link>
      <Link to="about">About</Link>
    </nav>
  </>
);
