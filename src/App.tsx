import React from 'react';
import './App.css';
import Blog from './features/blog/Blog';
import Header from './components/header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Post from './features/blog/Post';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
