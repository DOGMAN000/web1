import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cohort from './pages/Cohort';
import Apply from './pages/Apply';
import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cohort" element={<Cohort />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;