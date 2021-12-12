import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from './components/Home';
import LoginPage from './components/auth/Login';
import DefaultLayout from './components/containers/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="login" element={ <LoginPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
