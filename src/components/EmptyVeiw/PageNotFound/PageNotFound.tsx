import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <>
    <h2 style={{
      height: '100vh',
      marginTop: '160px',
      textAlign: 'center',
      color: 'red',
      fontSize: '20px',
    }}
    >
      Page not found 404
    </h2>
    <Link style={{ color: 'var(--secondary-black)' }} to="/">Go back</Link>
  </>
);
