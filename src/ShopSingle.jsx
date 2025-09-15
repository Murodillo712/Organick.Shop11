// src/ShopSingle.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './Products';
import ProductCard from './ProductCard';
import Footer from './Footer';

const ShopSingle = () => {
    const { id } = useParams();
    const pid = Number(id);
    const product = products.find(p => p.id === pid) || products[0];
    const [qty, setQty] = useState(1);
    const [tab, setTab] = useState('desc');

    const related = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <>
            {/* Banner */}
            <div className="bg-[url('/shops.png')] bg-cover bg-center h-[40vh] flex items-center justify-center rounded-b-lg">
                <h1 className="text-5xl font-bold text-[#274C5B]">Shop Single</h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* main */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* image */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center">
                        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-inner flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-80 object-contain rounded-md"
                            />
                        </div>
                    </div>

                    {/* details */}
                    <div className="flex flex-col">
                        <span className=" w-[70px] px-3 py-1 rounded-md text-center text-xs bg-[#274C5B] text-white">{product.tag}</span>

                        <h2 className="text-3xl font-bold text-[#274C5B] mt-4">{product.name}</h2>
                        <span className="">        <div className="flex mt-2 gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-8 text-yellow-400 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 15l-5.878 3.09L5.34 11.18 0.68 7.18l6.09-.9L10 1l3.23 5.28 6.09.9-4.66 4L15.88 18z" />
                                </svg>
                            ))}
                        </div></span>
                        <div className="flex items-center gap-4 mt-3">
                            <span className="text-sm text-gray-400 line-through">${product.oldPrice?.toFixed(2)}</span>
                            <span className="text-2xl font-extrabold text-[#274C5B]">${product.price?.toFixed(2)}</span>
                        </div>

                        <p className="text-gray-600 mt-6 max-w-prose leading-relaxed">
                            Simply dummy text of the printing and typesetting industry. Lorem had <br />
                            ceased to been the industry's standard dummy text ever since the 1500s,<br />
                            when an unknown printer took a galley. {product.description}
                        </p>

                        {/* qty & add */}
                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center  rounded-md overflow-hidden">
                                <span> Quantity : </span>  <button
                                    onClick={() => setQty(q => Math.max(1, q - 1))}
                                    className="px-3 py-2 bg-white   hover:bg-gray-50"
                                >−</button>
                                <input value={qty} readOnly className="w-14 border rounded-[5px] text-center text-sm" />
                                <button
                                    onClick={() => setQty(q => q + 1)}
                                    className="px-3 py-2 bg-white hover:bg-gray-50"
                                >+</button>
                            </div>

                            <button className="bg-[#274C5B] text-white px-6 py-2 rounded-md shadow">Add To Cart</button>
                        </div>

                        {/* tabs */}
                        <div className="mt-[160px] flex flex-col items-center justify-center ">
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setTab('desc')}
                                    className={`px-4 py-2 rounded-md ${tab === 'desc' ? 'bg-[#274C5B] text-white' : 'bg-gray-100'}`}
                                >
                                    Product Description
                                </button>
                                <button
                                    onClick={() => setTab('info')}
                                    className={`px-4 py-2 rounded-md ${tab === 'info' ? 'bg-[#274C5B] text-white' : 'bg-gray-100'}`}
                                >
                                    Additional Info
                                </button>
                            </div>

                            <div className="mt-4 p-6 bg-white rounded-md border text-gray-600">
                                {tab === 'desc' ? (
                                    <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.{product.description}
                                    </p>
                                ) : (
                                    <ul className="list-disc pl-5">
                                        <li>Weight: {product.weight ?? '250g'}</li>
                                        <li>Origin: {product.origin ?? 'Unknown'}</li>
                                        <li>Storage: Keep in a cool, dry place</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* related */}
                <h3 className="text-xl font-bold text-[#274C5B] mt-12 mb-6">Related Products</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {related.map(r => (
                        <Link key={r.id} to={`/product/${r.id}`}>
                            <ProductCard
                                name={r.name}
                                tag={r.tag}
                                price={r.price}
                                oldPrice={r.oldPrice}
                                rating={r.rating}
                                image={r.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ShopSingle;