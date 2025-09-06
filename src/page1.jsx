import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
import Lorader from './Loader'
const Service = "/service.png";
const pista1 = "/pista1.png";
const lola = "/lola.png";

const sut = "/sut.svg";
const uycha = "/uycha.svg";
const card = "/card.svg";
const barg = "/barg.svg";
const bugdoy = "/bugdoy.svg";
const red = "/red.svg";
const chiqish = "/chiqish.svg";
const video = "/Video.svg"


const Page1 = () => {
    const navigate = useNavigate(); // navigate funksiyasini olish

    const handleExploreMore = () => {
        navigate('/service/1'); // Tugma bosilganda Single Service sahifasiga o'tish
    };
    return (
        <div>

            <section className="w-full map h-[40vh]  ">
                <div
                    className=" [100%] h-[40vh] rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${Service})` }}
                />
            </section>

            <section>
                <div className='w-full h-[100vh] flex flex-col mt-[160px] items-center justify-center '>
                    <p className="nok text-green-600 italic text-lg mb-2">What we Grow</p>
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-[#274C5B] leading-snug mb-4">
                        Better Agriculture
                        for <br />
                        Better Future
                    </h2>
                    <div className='w-full h-[70vh]  flex items-center justify-center gap-6'>
                        <div className='w-[330px] h-[65vh] flex items-center justify-center flex-col gap-[25px] pr-[5px]  '>
                            <div className='flex items-end  w-full justify-center text-end flex-col'>
                                <div
                                    className="n flex box w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${sut})` }} />
                                <h1 className='text-[19px] font-bold '>Dairy Products
                                </h1>
                                <p className='text-[14px] font-sans'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
                            </div>
                            <div className='flex items-end  w-full justify-center text-end flex-col'>
                                <div
                                    className="n flex box w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${uycha})` }} />
                                <h1 className='text-[19px] font-bold '>Store Services
                                </h1>
                                <p className='text-[14px] font-sans'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
                            </div>
                            <div className='flex items-end  w-full justify-center text-end flex-col'>
                                <div
                                    className="n box flex w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${card})` }} />
                                <h1 className='text-[19px] font-bold '>Delivery Services
                                </h1>
                                <p className='text-[14px] font-sans'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
                            </div>
                        </div>
                        <div
                            className="box w-[320px] h-[70vh] inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${pista1})` }}
                        />
                        <div className='w-[330px] h-[65vh]  flex items-center justify-center flex-col gap-[25px] pr-[5px]  '>
                            <div className='flex items-start  w-full justify-center text-start flex-col'>
                                <div
                                    className="n box flex w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${barg})` }} />
                                <h1 className='text-[19px] font-bold '>Agricultural Services
                                </h1>
                                <p className='text-[14px] font-sans'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
                            </div>
                            <div className='flex items-start  w-full justify-center text-start flex-col'>
                                <div
                                    className="n box flex w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${bugdoy})` }} />
                                <h1 className='text-[19px] font-bold '>Organic Products
                                </h1>
                                <p className='text-[14px] font-sans'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
                            </div>
                            <div className='flex items-start  w-full justify-center text-start flex-col'>
                                <div
                                    className="n box flex w-[50px] h-[50px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${red})` }} />
                                <h1 className='text-[19px] font-bold '>Fresh Vegetables
                                </h1>
                                <p className='text-[14px] font-sans'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center mt-4 px-[90px]">
                        <button className=" hover:bg-[#274C5B] hover:text-white  flex items-center justify-center p-[50px] gap-2 border border-[#274C5B] text-[#274C5B] px-6  py-4 mt-[20px] rounded-[10px]"
                            onClick={handleExploreMore} >
                            Explore More  <div
                                className="n flex w-[20px] h-[20px] bg-cover bg-center hover:bg-white shadow-2xl rounded"
                                style={{ backgroundImage: `url(${chiqish})` }} />
                        </button>
                    </div>
                </div>
            </section >

            <section>
                <div className=' relative w-full h-[100vh] pt-[250px] mt-[200px] flex items-center justify-center'>
                    <div
                        className=" absolute w-[100%] h-[100vh] inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${lola})` }}
                    />
                    <p className=" absolute nok text-[#7EB693] italic text-[25px] mb-[700px]">Organic Only</p>
                    <h2 className=" absolute text-6xl text-center md:text-5xl font-bold text-[#274C5B] leading-snug mb-[580px]">
                        Everyday Fresh & Clean
                    </h2>
                    <p className=' absolute text-center mb-[450px] '>Simply dummy text of the printing and typesetting industry. Lorem had ceased <br /> to been the industry's standard dummy text ever since the </p>
                    <div
                        className="n absolute box flex w-[120px] h-[120px]  mb-[220px] bg-cover bg-center rounded"
                        style={{ backgroundImage: `url(${video}) ` }} />
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div >
    )
}

export default Page1