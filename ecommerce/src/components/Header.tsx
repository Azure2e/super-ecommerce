import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
const Header: React.fc = () => {
    return (<header classname='header'>
        <h1>Supermercado Online</h1>
        <nav>
            <Link to='/'>limpeza</Link>
            <Link to='/kitchen'>Conzinha</Link>
            <Link to='/beverages'>Bebidas</Link>
            <Link to='/vegetables'>Verduras</Link>
            <Link to='/snacks'>Bolachas e chocolates</Link>
            <Link to='/about'>sobre nós</Link>
        </nav>
    </header>
    );
};
export default Header;   