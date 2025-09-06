// src/ProductCard1.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard1 = ({ id, name, tag, price, oldPrice, rating, image }) => {
    return (
        <div className="shadow rounded-lg p-4 hover:shadow-lg hover:border-gray-900 cursor-pointer">
            <Link to={`/shop/${id}`}>
                <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-gray-500">{tag}</p>
                <p className="font-semibold">{price} $ <span className="line-through text-gray-400">{oldPrice} $</span></p>
                <p className="text-yellow-500">{'★'.repeat(rating)}</p>
            </Link>
        </div>
    );
};

export default ProductCard1;