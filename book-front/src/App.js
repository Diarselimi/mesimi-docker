import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Group from './Pages/Group';
import Navigation from './Pages/layouts/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/group/*'
            element={<Group />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;