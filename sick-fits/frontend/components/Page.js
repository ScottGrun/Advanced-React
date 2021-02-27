import React from 'react';

export default function Page({ children }) {
  return (
    <div>
      <p>I am the page</p>
      {children}
    </div>
  );
}
