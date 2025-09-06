import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import odam1 from '../public/odam1.png'
import odam2 from '../public/odam2.png'
import odam3 from '../public/odam3.png'
import odam4 from '../public/odam4.png'
import odam5 from '../public/odam5.png'
import odam6 from '../public/odam6.png'
import Footer from './Footer';

const Page3 = () => {
    return (
        <div>
            <section>
                <div className="bg-[url('/2kishi.png')] bg-cover bg-center h-[40vh] flex items-center justify-center rounded-b-lg">
                    <h1 className="text-5xl font-bold text-[#274C5B]">Our Team</h1>
                </div>
            </section>
            <div className='flex flex-col  w-[100%] gap-[50px]  items-center  justify-center h-[150vh] bg-gray-100'>
                <div className="w-full h-[90vh] mt-[50px] items-center  justify-start flex flex-col">
                    <p className="nok text-green-600 italic text-lg mb-2">Team</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
                        Our Organic Experts
                    </h2>
                    <p className="text-[#274C5B] mb-6 text-center">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>
                <div className='flex  gap-[20px] mb-[20px]  w-[100%] items-center  justify-center h-[90vh] bg-gray-100'>
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
                <div className='flex  gap-[20px]   w-[100%] items-center  justify-center h-[90vh] bg-gray-100'>
                    <div className=' flex box flex-col w-[300px] h-[50vh] bg-[#F9F8F8] shadow-gray-300 shadow-2xl  rounded-[30px]'>  <div
                        className=" flex  w-[300px] h-[40vh] inset-0 bg-cover rounded-t-[30px] bg-center" style={{ backgroundImage: `url(${odam4})` }}
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
                        className=" flex  w-[300px] h-[40vh] inset-0 bg-cover rounded-t-[30px] bg-center" style={{ backgroundImage: `url(${odam5})` }}
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
                        className=" flex  w-[300px] h-[40vh] inset-0 bg-cover rounded-t-[30px] bg-center" style={{ backgroundImage: `url(${odam6})` }}
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
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Page3