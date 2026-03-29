/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Catering from './pages/Catering';
import ServiceDetail from './pages/ServiceDetail';
import Logistics from './pages/Logistics';
import Venues from './pages/Venues';
import Guide from './pages/Guide';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/packages" element={<Layout><Packages /></Layout>} />
        <Route path="/catering" element={<Layout><Catering /></Layout>} />
        <Route path="/service/royal-decorators" element={<Layout><ServiceDetail /></Layout>} />
        <Route path="/logistics" element={<Layout><Logistics /></Layout>} />
        <Route path="/venues" element={<Layout><Venues /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
}

