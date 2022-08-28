import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  paddingTop: '100px',
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  gap: '20px',
};

export const Games = () => (
  <div style={style}>
    <h1>Games</h1>
    <Link to="sprint">Sprint</Link>
    <Link to="audiocall">Audio Call</Link>
  </div>
);
