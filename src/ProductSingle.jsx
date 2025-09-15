import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer.jsx";

const ProductSingle = () => {
    const { id } = useParams();
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(false);
    const pid = id ? parseInt(id, 10) : null;

    useEffect(() => {

        fetch("/products.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load products.json");
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch(() => {
                setError(true);

            });
    }, []);

    if (!products && !error) return <div className="p-6">Loading...</div>;
    if (!products && error) return <div className="p-6">Failed to load products.</div>;

    const product = (pid && products.find((p) => p.id === pid)) || products[0];
    const related = products.filter((p) => p.id !== product.id).slice(0, 4);

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-[url('/shop.png')] bg-cover h-[18vh] rounded-2xl mb-10 flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-[#274C5B]">Shop Single</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
                    <div className="bg-white rounded-lg p-8 shadow-lg flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full max-w-md object-contain" />
                    </div>

                    <div>
                        <span className="inline-block bg-[#274C5B] text-white text-xs px-3 py-1 rounded">{product.tag}</span>
                        <h2 className="text-2xl font-bold text-[#274C5B] mt-4">{product.name}</h2>
                        <div className="flex items-center gap-4 mt-3">
                            <span className="text-sm text-gray-400 line-through">${product.oldPrice?.toFixed(2)}</span>
                            <span className="text-xl font-bold text-[#274C5B]">${product.price?.toFixed(2)}</span>
                        </div>

                        <p className="text-gray-600 mt-6">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center border rounded">
                                <button onClick={() => { }} className="px-3 py-2">-</button>
                                <input defaultValue={1} readOnly className="w-12 text-center" />
                                <button onClick={() => { }} className="px-3 py-2">+</button>
                            </div>
                            <button className="bg-[#274C5B] text-white px-6 py-2 rounded">Add To Cart</button>
                        </div>

                        <div className="mt-8">
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-gray-100 rounded">Product Description</button>
                                <button className="px-4 py-2 bg-gray-100 rounded">Additional Info</button>
                            </div>
                            <div className="mt-4 text-gray-600">
                                <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-[#274C5B] mb-6">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {related.map((r) => (
                        <Link to={`/product/${r.id}`} key={r.id}>
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
        </div>
    );
};

export default ProductSingle;