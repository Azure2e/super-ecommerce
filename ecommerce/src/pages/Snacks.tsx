import React from "react";
import ProductCard from "../components/ProductCard";
import './App.css';

const Snacks: React.FC = () => {
  const products = [
    {
      nome: 'Bolacha Recheada',
      descricao: 'Bolacha recheada sabor chocolate 140g',
      preco: 4.99,
      imagem: '/images/bolacha-recheada.jpg',
    },
    {
      nome: 'Chocolate ao Leite',
      descricao: 'Barra de chocolate ao leite 170g',
      preco: 8.99,
      imagem: '/images/chocolate-ao-leite.jpg',
    },
    {
      nome: 'Bolacha Salgada',
      descricao: 'Bolacha salgada tradicional 200g',
      preco: 3.50,
      imagem: '/images/bolacha-salgada.jpg',
    },
    {
      nome: 'Chocolate Meio Amargo',
      descricao: 'Barra de chocolate meio amargo 150g',
      preco: 7.49,
      imagem: '/images/chocolate-meio-amargo.jpg',
    },
  ];

  return (
    <div>
      <h2>Bolachas e Chocolates</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Snacks;