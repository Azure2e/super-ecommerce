import React from 'react';
import ProductCard from '../components/ProductCard';
import './App.css';

const Vegetables: React.FC = () => {
      const products = [
            {
                  nome: 'Alface',
                  descricao: 'Alface fresca por unidade',
                  preco: 2.99,
                  imagem: '/images/alface.jpg',
            },
            {
                  nome: 'Tomate',
                  descricao: 'Tomate maduro por kg',
                  preco: 4.99,
                  imagem: '/images/tomate.jpg',
            },
            {
                  nome: 'Cenoura',
                  descricao: 'Cenoura fresca por kg',
                  preco: 3.50,
                  imagem: '/images/cenoura.jpg',
            },
            {
                  nome: 'Batata',
                  descricao: 'Batata inglesa por kg',
                  preco: 2.49,
                  imagem: '/images/batata.jpg',
            },
            {
                  nome: 'Couve',
                  descricao: 'Couve orgânica por unidade',
                  preco: 3.99,
                  imagem: '/images/couve.jpg',
            },
      ];

      return (
            <div>
                  <h2>Verduras e Legumes</h2>
                  <div className="products-grid">
                        {products.map((product, index) => (
                              <ProductCard key={index} {...product} />
                        ))}
                  </div>
            </div>
      );
};

export default Vegetables;
