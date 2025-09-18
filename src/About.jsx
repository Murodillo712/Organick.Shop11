import React from 'react'
import Footer from './Footer'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../public/Banner.png";
import Salat from "../public/salat.png";
import Barg1 from "../public/barg1.png";
import icon from "../public/Icon.png";
import icon1 from "../public/Icon1.png";
import icon2 from "../public/Icon2.png";
import icon3 from "../public/Icon3.png";
import odam1 from "../public/odam1.png";
import odam2 from "../public/odam2.png";
import odam3 from "../public/odam3.png";
import Spicy from "../public/spicy.png";
import Nuts from "../public/nuts.png";
import anor0 from "../public/anor.png";
import Vegetable from "../public/vegetable.avif";

const uy1 = "/uy.svg";
const uy2 = "/uy2.svg";
const About = () => {
    return (
        <>
            <section className="w-full h-[40vh]  ">
                <img src="/Banner.png" alt="" />
                <div
                    className=" [100%] h-[40vh] inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Banner})` }}
                />
            </section>

            <section className='flex pl-[250px] w-[100%] gap-[50px] items-center  justify-center h-[90vh] bg-white'>
                <div
                    className=" flex w-[1000px] box h-[70vh] inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Salat})` }}
                />
                <div>
                    <div className="w-full ">
                        <p className="nok text-green-600 italic text-lg mb-2">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
                            We do Creative <br />
                            Things for Success
                        </h2>
                        <p className="text-[#274C5B] mb-6">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to be
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley.
                        </p>
                        <p className="text-[#274C5B] mb-6">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to be
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley.
                        </p>
                        <div className="flex gap-4">
                            <span className='flex items-center gap-3 justify-center'>
                                <div
                                    className="n flex w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${uy2})` }} />
                                <h1 className='text-2xl font-bold '>Modern Agriculture <br />
                                    Equipment
                                </h1>
                            </span>

                            <span className='flex items-center gap-3 justify-center'>
                                <div
                                    className="n flex w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${uy1})` }} />
                                <h1 className='text-2xl font-bold '>No growth <br /> hormones are used</h1>
                            </span>
                        </div>
                        <button className='mt-[50px] w-[200px] h-[60px] rounded-[7px] text-white bg-[#274C5B] box '>Explore More <span className='w-[10px] h-[10px] bg-[#335B6B] rounded-[50px] '>➜</span></button>

                    </div>
                </div>

            </section>

            <section>
                <div className='flex pl-[200px] w-[100%] gap-[50px] items-center  justify-center h-[120vh]  bg-gray-100'>
                    <div>
                        <div className="w-full ">
                            <p className="nok text-green-600 italic text-lg mb-2">Why Choose us?</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
                                We do not buy from the <br />
                                open market & traders.
                            </h2>
                            <p className="text-[#274C5B] mb-6">
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
                            </p>
                            <div className="text-[#274C5B] mb-6 w-[300px] border-l-4 pl-4 border-green-600 bg-amber-100 italic">
                                <div className='text-[#7EB693] border-amber-300 border-4 w-[10px] h-[10px] '></div>100% Natural Product
                            </div>
                            <p className='ml-[60px]'>Simply dummy text of the printing and typesetting <br /> industry Lorem Ipsum</p>
                            <div className="text-[#274C5B] mt-[15px] mb-[10px] w-[300px] border-l-4 pl-4 border-green-600 bg-amber-100 italic">
                                <div className='text-[#7EB693] border-amber-300 border-4 w-[10px] h-[10px] '></div> Increases resistance
                            </div>
                            <p className='ml-[60px]'>Filling, and temptingly healthy, our Biona Organic <br />Granola with Wild Berries is just the thing</p>


                        </div>
                    </div>
                    <div>
                        <div
                            className=" flex mr-[100px] w-[500px] h-[70vh] inset-0 bg-cover rounded-[20px] shadow-2xl shadow-emerald-400 bg-center"
                            style={{ backgroundImage: `url(${Barg1})` }}
                        />
                    </div>
                </div>
                <div className='flex gap-[20px] mb-[100px]   w-[100%] items-center  justify-center h-[30vh] bg-white'>
                    <div className='box w-[200px] h-[250px]  gap-[9px] rounded-[15px] bg-white box-border  shadow-2xl items-center  justify-center flex flex-col'>
                        <div
                            className=" flex  w-[70px] h-[70px] inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${icon})` }}
                        />
                        <h2 className='font-bold text-[#274C5B]'>Return Policy</h2>
                        <p className='text-center'>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
                    </div>
                    <div className='box w-[200px] h-[250px]  gap-[9px] rounded-[15px] bg-white shadow-2xl box-border   items-center  justify-center flex flex-col'>
                        <div
                            className=" flex  w-[70px] h-[70px] inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${icon1})` }}
                        />
                        <h2 className='font-bold text-[#274C5B]'>Return Policy</h2>
                        <p className='text-center'>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
                    </div>
                    <div className='box w-[200px] h-[250px]  gap-[9px] rounded-[15px] bg-white shadow-2xl box-border  items-center  justify-center flex flex-col '>
                        <div
                            className=" flex m w-[70px] h-[70px] inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${icon2})` }}
                        />
                        <h2 className='font-bold text-[#274C5B]'>Return Policy</h2>
                        <p className='text-center'>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
                    </div>
                    <div className='box w-[200px] h-[250px] gap-[9px] rounded-[15px] shadow-2xl bg-white box-border  items-center  justify-center flex flex-col '>
                        <div
                            className=" flex   w-[70px] h-[70px] inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${icon3})` }}
                        />
                        <h2 className='font-bold text-[#274C5B]'>Return Policy</h2>
                        <p className='text-center'>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-col  w-[100%]  items-center  justify-center h-[90vh] bg-gray-100'>
                    <div className="w-full h-[90vh] items-center  justify-start flex flex-col">
                        <p className="nok text-green-600 italic text-lg mb-2">Team</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
                            Our Organic Experts
                        </h2>
                        <p className="text-[#274C5B] mb-6 text-center">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                    </div>
                    <div className='flex  gap-[20px] mb-[90px]  w-[100%] items-center  justify-center h-[90vh] bg-gray-100'>
                        <div className=' flex box flex-col w-[300px] h-[50vh] bg-[#F9F8F8] shadow-gray-300 shadow-2xl  rounded-[30px]'>  <div
                            className=" flex  w-[300px] h-[40vh] inset-0 bg-cover rounded-t-[30px] bg-center" style={{ backgroundImage: `url(${odam1})` }}
                        />
                            <div> <h1 className='ml-[17px] mt-[14px] text-[#274C5B font-bold m] '>Giovani Bacardo</h1>
                                <p className=' ml-[17px] nok text-[#7EB693]'>Farmer</p>
                            </div>
                            <div className='flex ml-[180px] '>
                                <FaInstagram className='ml-[17px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                                <FaFacebook className=' ml-[10px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                                <FaTwitter className='  ml-[10px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                            </div>
                        </div>
                        <div className='flex box flex-col w-[300px] h-[50vh] bg-[#F9F8F8] shadow-gray-300 shadow-2xl  rounded-[30px]'>  <div
                            className=" flex  w-[300px] h-[40vh] inset-0 bg-cover rounded-t-[30px] bg-center" style={{ backgroundImage: `url(${odam2})` }}
                        />
                            <div> <h1 className='ml-[17px] mt-[14px] text-[#274C5B font-bold m] '>Giovani Bacardo</h1>
                                <p className=' ml-[17px] nok text-[#7EB693]'>Farmer</p>
                            </div>
                            <div className='flex ml-[180px] '>
                                <FaInstagram className='ml-[17px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                                <FaFacebook className=' ml-[10px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                                <FaTwitter className='  ml-[10px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                            </div>
                        </div>
                        <div className='flex box flex-col w-[300px] h-[50vh] bg-[#F9F8F8] shadow-gray-300 shadow-2xl rounded-[30px]'>  <div
                            className=" flex  w-[300px] h-[40vh] inset-0 bg-cover rounded-t-[30px] bg-center" style={{ backgroundImage: `url(${odam3})` }}
                        />
                            <div> <h1 className='ml-[17px] mt-[14px] text-[#274C5B font-bold m] '>Giovani Bacardo</h1>
                                <p className=' ml-[17px] nok text-[#7EB693]'>Farmer</p>
                            </div>
                            <div className='flex ml-[180px] '>
                                <FaInstagram className='ml-[17px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                                <FaFacebook className=' ml-[10px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                                <FaTwitter className='  ml-[10px] mb-[17px] flex text-[#274C5B] hover:text-green-600 cursor-pointer' size={17} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-col  w-[100%]  items-center  justify-center h-[70vh] bg-[#274C5B]'>
                    <p className='nok text-[30px] text-[#7EB693] '>About Us</p>
                    <h1 className='m text-[40px] font-bold '>What We Offer for You</h1>
                    <div className='flex gap-[20px]   w-[100%] items-center  justify-center h-[50vh] bg-[#274C5B]'>
                        <div className='box w-[250px] h-[300px] flex flex-col items-center justify-center gap-[10px]'>
                            <div
                                className=" flex  w-[250px] h-[250px]  inset-0 bg-cover rounded-[20px] bg-center" style={{ backgroundImage: `url(${Spicy})` }}
                            />
                            <p className='m'>Spicy</p>
                        </div>
                        <div className=' box w-[250px] h-[300px] flex flex-col items-center justify-center gap-[10px]'>
                            <div
                                className=" flex  w-[250px] h-[250px] inset-0 bg-cover rounded-[20px] bg-center" style={{ backgroundImage: `url(${Nuts})` }}
                            />
                            <p className='m'>Nuts & Feesd</p>
                        </div>

                        <div className='box w-[250px] h-[300px] flex flex-col items-center justify-center gap-[10px]'>
                            <div
                                className=" flex  w-[250px] h-[250px] inset-0 bg-cover rounded-[20px] bg-center" style={{ backgroundImage: `url(${anor0})` }}
                            />
                            <p className='m'>Fruits</p>
                        </div>
                        <div className='box w-[250px] h-[300px] flex flex-col items-center justify-center gap-[10px]'>
                            <div
                                className=" flex  w-[250px] h-[250px] inset-0 bg-cover rounded-[20px] bg-amber-50 bg-center" style={{ backgroundImage: `url(${Vegetable})` }}
                            />
                            <p className='m'>Vegetable</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />



        </>
    );
}



export default About