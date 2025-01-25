import React from 'react';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/" className="back-home">Go Back Home</a>
    </div>
  );
}

export default PageNotFound;
