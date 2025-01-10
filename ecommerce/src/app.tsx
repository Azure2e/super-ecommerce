import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
    'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CleaningProducts from './pages/CleaningProducts';
import KitchenProducts from "./pages/KitchenProducts";
import Beverages from "./pages/Beverages";
import Vegetables from './pages/Vegetables';
import Snacks from './pages/Snacks';
import AboutUs from './pages/AboutUs';
import api from "./services/api";
const App: React.Fc = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <route path='/' element={<CleaningProducts />} /><Route path='/Kitchen'
                    element={<KitchenProducts />} /><Route path='./beverages'
                        element={<Beverages />} /><Route path='./vegetables'
                            element={<Vegetables />} /><Route path='/snacks'
                                element={<Snacks />} /><Route path='./about'
                                    element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
};
export default App;