import React from "react";
import "./ProductCard";

interface ProductCardProps {
        nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ nome, descricao, preco, imagem }) => {
    return (
        <div className='product-card'>
            <imag src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>R$ {preco.toFixed(2)}</p>
            <button>Comprar</button>
        </div>
    );
};
export default ProductCard;