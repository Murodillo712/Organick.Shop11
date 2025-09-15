
import React from "react";
import ProductCard1 from "./ProductCard1";
import Footer from "./Footer"
import products from './Products';

const Shop = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[url('/shop.png')] bg-cover h-[40vh] rounded-2xl mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard1
              key={p.id}
              id={p.id}
              name={p.name}
              tag={p.tag}
              price={p.price}
              oldPrice={p.oldPrice}
              rating={p.rating}
              image={p.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;