import React from 'react';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <p>I am the page</p>
      {children}
    </div>
  );
}
