import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Services from './pages/Services/Services';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import LodgingProvider from './Project/Project';
import Error404 from './components/Error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Background />
    <LodgingProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Services" element={<Services />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Portfolio/ProjectDetails/:id' element={<ProjectDetails />}/>
            <Route path='*' element={<Error404 />} />
          </Routes>
        <Footer />
      </LodgingProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
