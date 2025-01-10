import React from 'react';
import "./app.tsx";
interface Beverage {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
}

const beverages: Beverage[] = [
    {
        id: 1,
        name: 'Refrigerante Cola',
        price: 'R$ 5,00',
        description: 'Refrigerante sabor cola 350ml.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Refrigerante Laranja',
        price: 'R$ 4,50',
        description: 'Refrigerante sabor laranja 350ml.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Cerveja Pilsen',
        price: 'R$ 7,00',
        description: 'Cerveja Pilsen lata 350ml.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Água Mineral',
        price: 'R$ 2,50',
        description: 'Água mineral sem gás 500ml.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        name: 'Energético Tropical',
        price: 'R$ 10,00',
        description: 'Energético sabor tropical 250ml.',
        image: 'https://via.placeholder.com/150',
    },
];

const Beverages: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Bebidas</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {beverages.map((beverage) => (
                    <div
                        key={beverage.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '10px',
                            width: '200px',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={beverage.image}
                            alt={beverage.name}
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        <h2 style={{ fontSize: '1.2em' }}>{beverage.name}</h2>
                        <p style={{ color: '#555' }}>{beverage.description}</p>
                        <p style={{ fontWeight: 'bold', color: '#000' }}>{beverage.price}</p>
                        <button
                            style={{
                                padding: '10px 15px',
                                backgroundColor: '#28a745',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Comprar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Beverages;