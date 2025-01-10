import React from 'react';
import './app.tsx';

const KitchenProducts: React.FC = () => {
    // Lista de produtos de cozinha
    const kitchenProducts = [
        {
            id: 1,
            name: 'Conjunto de Panelas',
            description: 'Conjunto de panelas antiaderentes com 5 peças.',
            price: 249.99,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Kit de Facas',
            description: 'Kit de facas inoxidáveis com 6 peças.',
            price: 99.99,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Escorredor de Pratos',
            description: 'Escorredor de pratos dobrável em aço inox.',
            price: 39.99,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Liquidificador',
            description: 'Liquidificador com 3 velocidades e copo de 2L.',
            price: 199.99,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'Jogo de Utensílios',
            description: 'Jogo de utensílios de cozinha em silicone.',
            price: 79.99,
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="products-grid">
            <h1 className="page-title">Produtos de Cozinha</h1>
            {kitchenProducts.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="product-price">R$ {product.price.toFixed(2)}</p>
                        <button>Comprar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KitchenProducts;