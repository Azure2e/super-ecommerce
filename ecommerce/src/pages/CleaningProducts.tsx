import React from 'react';
import ProductCard from '../components/ProductCard';

const CleaningProducts: React.FC = () => {
  const products = [
    {
      nome: 'Detergente',
      descricao: 'Detergente líquido 500ml',
      preco: 5.99,
      imagem: '/images/detergente.jpg',
    },
    {
      nome: 'Desinfetante',
      descricao: 'Desinfetante para piso 1L',
      preco: 7.99,
      imagem: '/images/desinfetante.jpg',
    },
  ];

  return (
    <div>
      <h2>Produtos de Limpeza</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CleaningProducts;