import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Services from './pages/Services/Services';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import backgroundImg from '../src/assets/img_fond.webp';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import LodgingProvider from './Project/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <img className='backgroungImg' src={backgroundImg} alt='lignes de code'/>
    <LodgingProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Services" element={<Services />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path="/ProjectDetails/:id" element={<ProjectDetails />}/>
            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
        <Footer />
      </LodgingProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
