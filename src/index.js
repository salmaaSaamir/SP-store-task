import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <Navbar />
    <AboutUs />
    <Content />
    <Footer />
    </>
   

);
reportWebVitals();
