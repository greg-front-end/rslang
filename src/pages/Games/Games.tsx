import React from 'react';
import { Link } from 'react-router-dom';

export const Games = () => (
  <>
    <h1>Games</h1>
    <Link to="sprint">Sprint</Link>
    <Link to="audiocall">Audio Call</Link>
  </>
);
