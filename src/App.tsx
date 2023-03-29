import React from 'react';
import Router from './routes';

function App() {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center mb-7 text-amber-500">
        Thuan Nguyen's Sample App
      </h1>

      <Router />
    </div>
  );
}

export default App;
