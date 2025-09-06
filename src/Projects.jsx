import React from 'react';
import banan from '../public/banan1.png';
import message from '../public/message.png';
import phone from '../public/phone.png';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import joylshuv from '../public/joylashuv.png';
import Footer from './Footer';
const Projects = () => {
    return (
        <div className="min-h-screen bg-white">
            <section>
                <div className="bg-[url('/contact.png')] bg-cover bg-center h-[40vh] flex items-center justify-center rounded-b-lg">
                    <h1 className="text-5xl font-bold text-[#274C5B]">Contact Us</h1>
                </div>
            </section>
            <section>
                <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center ">
                    <div className='w-[950px] h-[60vh]  gap-[40px]  flex  items-center justify-center'>
                        <div
                            className=" flex boxs  w-[400px] h-[400px]  inset-0 bg-cover rounded-[20px] bg-center" style={{ backgroundImage: `url(${banan})` }}
                        />
                        <div className='w-[510px] h-full mt-[70px]  flex items-center justify-center '>
                            <div className='w-full h-full  text-start  flex flex-col gap-[7px]'>
                                <h1 className='font-bold text-3xl'>We'd love to talk about how we can work together.</h1>
                                <p className='text-[14px] l'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
                                    been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
                                <div className='w-[250px] h-[70px] rounded-xl   bg-gray-200 shadow-2xl flex-col  flex items-center justify-start gap-[20px] pl-[10px] '>
                                    {/* Message Card */}
                                    <div
                                        className='w-full h-full flex boxs items-center justify-start gap-[20px] cursor-pointer'
                                        onClick={() => window.location.href = 'mailto:support@saasflow.com'}
                                    >
                                        <div className='w-[60px] h-[60px] bg-gray-200 rounded-xl bg-cover' style={{ backgroundImage: `url(${message})` }}></div>
                                        <div className='w-[190px] h-[70px]'>
                                            <h1>Message</h1>
                                            <p className='text-[12px]'>support@saasflow.com</p>
                                        </div>
                                    </div>

                                    {/* Contact Us Card */}
                                    <div
                                        className='w-[250px] h-[70px] boxs rounded-xl bg-gray-100 flex items-center shadow-gray-600 justify-start gap-[20px] cursor-pointer'
                                        onClick={() => window.location.href = 'tel:+998999950108'}
                                    >
                                        <div className='w-[60px] h-[60px] bg-gray-200 rounded-xl bg-cover' style={{ backgroundImage: `url(${phone})` }}></div>
                                        <div className='w-[190px] h-[70px]'>
                                            <h1>Contact Us</h1>
                                            <p className='text-[12px]'>+998999950108</p>
                                        </div>
                                    </div>

                                    {/* Social Media Icons */}
                                    <div className="flex items-center justify-center gap-4">
                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/murodillo_khan" className="w-9 h-9 rounded-full box bg-gray-100 flex items-center justify-center"><FaInstagram /></a>
                                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61565984144551" className="w-9 h-9 box rounded-full bg-gray-100 flex items-center justify-center"><FaFacebook /></a>
                                        <a target="_blank" rel="noreferrer" href="https://twitter.com" className="w-9 h-9 box rounded-full bg-gray-100 flex items-center justify-center"><FaTwitter /></a>
                                        <a target="_blank" rel="noreferrer" href="https://pinterest.com" className="w-9 h-9 box rounded-full bg-gray-100 flex items-center justify-center"><FaPinterest /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-auto flex items-center justify-center '>
                <div className="w-[80%] h-auto flex flex-col items-center rounded-[20px] justify-end py-12 bg-[url('/barg6.png')] bg-cover bg-center">
                    <div className='w-[400px] h-[400px] flex bg-[#FFFFFF] rounded-[20px] ml-[600px] '>
                        <div className="w-full flex flex-col items-start justify-center p-8">
                            <p className="nok text-green-600 italic text-lg mb-2">Location</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
                                Our Farms
                            </h2>
                            <p className="text-[#274C5B] mb-6">
                                Established fact that a reader will be distracted <br /> by the readable content of a page when looking <br />
                                a layout. The point of using.
                            </p>

                            {/* New York Location */}
                            <div
                                className='w-full h-full flex boxs items-center justify-start gap-[20px] cursor-pointer'
                                onClick={() => window.open('https://maps.google.com/?q=299+Park+Avenue+New+York+NY+10171', '_blank')}
                            >
                                <div className='w-[40px] h-[40px] bg-gray-200 rounded-xl bg-cover' style={{ backgroundImage: `url(${joylshuv})` }}></div>
                                <div className='w-[190px] h-[70px]'>
                                    <h1>New York, USA:</h1>
                                    <p className='text-[12px] text-gray-600'>299 Park Avenue New York,<br />New York 10171</p>
                                </div>
                            </div>

                            {/* London Location */}
                            <div
                                className='w-full h-full flex boxs items-center justify-start gap-[20px] cursor-pointer'
                                onClick={() => window.open('https://maps.google.com/?q=30+Stamford+Street+London+SE1+9LQ', '_blank')}
                            >
                                <div className='w-[40px] h-[40px] bg-gray-200 rounded-xl bg-cover' style={{ backgroundImage: `url(${joylshuv})` }}></div>
                                <div className='w-[190px] h-[70px]'>
                                    <h1>London, UK:</h1>
                                    <p className='text-[12px] text-gray-600'>30 Stamford Street,<br />London SE1 9LQ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-auto flex flex-col items-center justify-center mb-20 '>
                <div className="w-full max-w-3xl mt-16">
                    <form
                        className="space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const data = Object.fromEntries(formData.entries());
                            alert("Message sent successfully!\nWe'll contact you soon.");
                            console.log("Form Data:", data);
                            // Keyingi bosqichda bu yerga API chaqiruv qo'shishingiz mumkin
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                                <input type="text" name="fullName" placeholder="Your Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email*</label>
                                <input type="email" name="email" placeholder="yourname@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                                <input type="text" name="company" placeholder="Company name here" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                                <input type="text" name="subject" placeholder="Write on the topic" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                            <textarea name="message" rows={5} placeholder="Hello! Please contact me to talk about this..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required></textarea>
                        </div>
                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Projects;