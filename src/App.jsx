import React from "react";
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shops from "./Shop";
import ProductSingle from "./ProductSingle";

import food from "../public/food.png";
import card1 from "../public/card1.png";
import card2 from "../public/card2.png";
import aboutImg from "../public/about.png";
import Testimonial from "../public/Testimonial.png";
import Opa from "../public/opa.png";

import ProductCard from "./ProductCard";
import Card from "./Card";
import tabiyat from "../public/tabiat.png";
import caram from "../public/caram.png";
import banan from "../public/banan.png";
import pista from "../public/pista.png";
import pamldori from "../public/pamldori.png";
import mosh from "../public/mosh.png";
import yongoq from "../public/yongoq.png";
import tuxum from "../public/tuxum.png";
import mak from "../public/non2.png"
import kitob from "../public/kitob.png";
import shak from "../public/shkland.jpg";
import barg from "../public/barg.png";
import gulkaram from "../public/gulkaram.png";
import baqilajon from "../public/baqilajon.png";
import piyoz from "../public/piyoz.png";
import karam1 from "../public/karam1.png";
import NewsCard from "./NewsCard";
import barg12 from "../public/barg12.png"
import tomato from "../public/tamato.png"

export default function App() {
  const products = [
    { label: "Vegetable", image: caram, name: "Calabrese Broccoli", oldPrice: 20.0, price: 13.0 },
    { label: "Fresh", image: banan, name: "Fresh Banana Fruites", oldPrice: 20.0, price: 14.0 },
    { label: "Millets", image: pista, name: "White Nuts", oldPrice: 20.0, price: 15.0 },
    { label: "Vegetable", image: pamldori, name: "Vegan Red Tomato", oldPrice: 20.0, price: 17.0 },
    { label: "Health", image: mosh, name: "Mung Bean", oldPrice: 20.0, price: 11.0 },
    { label: "Nuts", image: yongoq, name: "Brown Hazelnut", oldPrice: 20.0, price: 12.0 },
    { label: "Fresh", image: tuxum, name: "Eggs", oldPrice: 20.0, price: 17.0 },
    { label: "Fresh", imag: mak, name: "Zelco Suji Elaichi Rusk", oldPrice: 20.0, price: 15.0 },
  ];
  const rit = [
    { label: "Vegetable", image: gulkaram, name: "Calabrese Broccoli", oldPrice: 20.0, price: 13.0 },
    { label: "Fresh", image: baqilajon, name: "Fresh Banana Fruites", oldPrice: 20.0, price: 14.0 },
    { label: "Millets", image: piyoz, name: "White Nuts", oldPrice: 20.0, price: 15.0 },
    { label: "Vegetable", image: karam1, name: "Vegan Red Tomato", oldPrice: 20.0, price: 17.0 },
  ];

  return (

    <div className="font-sans">


      <section className="w-full h-[85vh] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${food})` }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 w-[800px] flex flex-col items-start justify-center pl-[180px] h-full text-white text-center px-4">
          <p className="nok text-[#7EB693] italic text-lg">100% Natural Food</p>
          <h1 className="text-5xl font-bold  leading-tight text-black text-start">
            Choose the best <br />healthier way <br />  of life
          </h1>
          <button className="mt-6 bg-[#EFD372] hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md flex items-start gap-2">
            Explore Now <span>➜</span>
          </button>
        </div>
      </section>

      <div className="flex flex-col h-[350px] md:flex-row gap-6 my-10 px-4 md:px-0 items-center justify-center">
        <div
          className="box w-full md:w-[450px] h-[220px] bg-cover bg-center rounded-xl relative"
          style={{ backgroundImage: `url(${card1})` }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/10" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
            <p className="nok text-green-100 italic text-sm">Natural!!</p>
            <h2 className="text-xl md:text-2xl font-bold mt-1 leading-tight">
              Get Garden <br /> Fresh Fruits
            </h2>
          </div>
        </div>

        <div
          className="box w-full md:w-[450px] h-[220px] bg-cover bg-center rounded-xl relative"
          style={{ backgroundImage: `url(${card2})` }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/10" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center text-[#274C5B]">
            <p className="text-[#7EB693] italic text-sm">Offer!!</p>
            <h2 className="text-xl md:text-2xl font-bold mt-1 leading-tight">
              Get 10% off <br /> on Vegetables
            </h2>
          </div>
        </div>
      </div>

      <section className="w-full bg-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-1/2">
            <img src={aboutImg} alt="Fruits" className="w-full rounded-xl" />
          </div>

          <div className="w-full md:w-1/2">
            <p className="nok text-green-600 italic text-lg mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
              We Believe in Working <br />
              Accredited Farmers
            </h2>
            <p className="text-[#274C5B] mb-6">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to be
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-lg">🍃</div>
                <div>
                  <h4 className="font-semibold text-[#274C5B]">Organic Foods Only</h4>
                  <p className="text-sm text-[#274C5B]">
                    Simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-lg">✅</div>
                <div>
                  <h4 className="font-semibold text-[#274C5B]">Quality Standards</h4>
                  <p className="text-sm text-[#274C5B]">
                    Simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-6 bg-[#274C5B] hover:bg-blue-950 text-white px-6 py-3 rounded-[10px] shadow flex items-center gap-2">
              Shop Now <span>➜</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F9F8F8] py-16 px-4 md:px-20">
        <div className="text-center mb-10">
          <p className="nok text-[#7EB693] italic text-lg">Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] mt-2">Our Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#274C5B] text-white px-6 py-3 rounded-md hover:bg-[#1f3d48]">
            Load More
          </button>
        </div>
      </section>
      <section className="w-full h-[120vh] relative  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Testimonial})` }}
        />
        <div className="relative pt-[100px]  z-10 w-full flex flex-col items-center justify-start pl-[120px] h-full text-white text-center px-4">
          <p className="nok text-[#7EB693] italic text-lg">Testimonial</p>
          <h1 className="text-4xl font-bold  leading-tight text-black text-center">
            What Our Customer Saying?
          </h1>
          <div
            className="w-[100px] h-[100px] rotate-full  mt-[65px] inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Opa})` }}
          />
          <span className="pt-[7px] flex justify-between  text">
            <div className="flex  gap-[2px]">

              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l-5.878 3.09L5.34 11.18 0.68 7.18l6.09-.9L10 1l3.23 5.28 6.09.9-4.66 4L15.88 18z" />
                </svg>
              ))}
            </div>
          </span>
          <p className=" text-[#274C5B] pt-[20px] text-[15px] italic ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          <h1 className="text-[25px] font-bold pt-[20px] leading-tight text-black text-center">
            Sara Taylor          </h1>
          <p className=" text-[#274C5B] text-[15px] italic ">Consumer</p>
          <div className="flex items-center justify-center gap-[20px] w-full h-[50px] ">
            <span className="w-[10px] h-[10px] rounded-full bg-gray-300"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#7EB693]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-gray-300"></span>
          </div>
          <div className="z-10 bg-[#d6d2d2] w-[800px]  mt-[50px] h-[1px]" />

          <div className="flex  justify-around w-[800px] mt-[70px] ">
            <span className="w-[150px] h-[150px] rounded-full border-[3px] border-[#7EB693]  ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B]  mt-[35px] ">100%</h2>
              <p className=" text-[#274C5B]  text-center  text-[17px]">Organic</p>
            </span>
            <span className="w-[150px] h-[150px] rounded-full border-[3px] border-[#7EB693]  ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B]  mt-[35px] ">285</h2>
              <p className=" text-[#274C5B]  text-center  text-[17px]">Active Product</p>
            </span>
            <span className="w-[150px] h-[150px] rounded-full border-[3px] border-[#7EB693]  ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B]  mt-[35px] ">350+</h2>
              <p className=" text-[#274C5B]  text-center text-[17px]">Organic Orchads</p>
            </span>
            <span className="w-[150px] h-[150px] rounded-full border-[3px] border-[#7EB693]  ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B]  mt-[35px] ">25+</h2>
              <p className=" text-[#274C5B]  text-center text-[17px]">Years of Farming</p>
            </span>

          </div>
        </div>

      </section>
      <section className="flex justify-center items-center w-full h-[100vh] bg-[#274C5B] ">
        <div className="flex flex-col items-start justify-between w-[1100px] h-[64vh]">
          <div className="flex justify-between w-[1100px]">
            <div>
              <p className="nok text-[#7EB693] italic text-lg">Offer</p>
              <h1 className="text-[35px] m font-bold  leading-tight text-white text-center">
                We Offer Organic For You
              </h1>
            </div>
            <div>
              <button className="mt-6 bg-[#EFD372] text-gray-900 px-6 py-3 rounded-md flex items-start gap-2">
                View All Product <span>➜</span>
              </button>
            </div>
          </div>

          <div className="flex relative w-[1100px] h-[45vh] items-center justify-around z-19">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {rit.map((p, i) => (
                <Card key={i} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full ">
        <div className="max-w-7xl flex items-stretch gap-8">

          <div className="w-1/2 relative z-0">
            <div className="h-[100vh]  overflow-hidden shadow-sm">
              <img
                src={tabiyat}
                alt="Fields"
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-1/2 flex items-center">
            <div className="relative z-10 -ml-32 bg-white rounded-[28px] rounded-l-[48px]  p-12 w-[640px]">
              <p className="text-[#7EB693] text-2xl italic mb-3 nok">Eco Friendly</p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#274C5B] leading-tight mb-6">
                Econis is a Friendly<br />Organic Store
              </h1>

              <div className="space-y-6 text-[#274C5B]">
                <div>
                  <h4 className="font-semibold text-lg">Start with Our Company First</h4>
                  <p className="text-sm text-[#6b7a7a] mt-1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Learn How to Grow Yourself</h4>
                  <p className="text-sm text-[#6b7a7a] mt-1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Farming Strategies of Today</h4>
                  <p className="text-sm text-[#6b7a7a] mt-1">
                    Doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#eef7f2] py-30">
        <div className="max-w-7xl h-[40vh] mx-auto ">
          <div className=" oi grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: kitob, label: "Organic Juice" },
              { img: barg, label: "Organic Food" },
              { img: shak, label: "Nuts Cookies" },
            ].map((it, idx) => (
              <div
                key={idx}
                className="relative h-56 md:h-72 rounded-lg overflow-hidden shadow-sm"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${it.img})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-2 rounded-full shadow-md text-sm font-medium text-[#274C5B]">
                    {it.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start justify-between mb-10">
            <div className="text-left">
              <p className="nok text-[#7EB693] italic text-lg">News</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B]">
                Discover weekly content about <br /> organic food, & more
              </h2>
            </div>

            <div className="hidden md:flex items-center">
              <button className="flex items-center gap-2 border border-[#274C5B] text-[#274C5B] px-4 py-2 rounded-full">
                More News
                <span className="w-6 h-6 rounded-full bg-[#274C5B] text-white text-xs flex items-center justify-center">•</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <NewsCard
                image={barg12}
                date="25 Nov"
                title="Our Favourite Summertime Tommeto"
                excerpt="Simply dummy text of the printing and typesetting industry. Lorem Ipsum."
              />
            </div>

            <div className="flex justify-center">
              <NewsCard
                image={tomato}
                date="25 Nov"
                title="Our Favourite Summertime Tommeto"
                excerpt="Simply dummy text of the printing and typesetting industry. Lorem Ipsum."
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>


  );
}
