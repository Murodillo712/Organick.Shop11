import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Qo'shildi
import Lorader from './Loader';
import Footer from './Footer';
import { projects } from '../src/projects'; // 👈 Qo'shildi

const Page2 = () => {
    // Mahsulotlarni 2 qatorga bo'lish
    const firstRow = projects.slice(0, 3);
    const secondRow = projects.slice(3, 6);

    return (
        <div>
            <section>
                <div className="bg-[url('/gul2.png')] bg-cover bg-center h-[40vh] flex items-center justify-center rounded-b-lg">
                    <h1 className="text-5xl font-bold text-[#274C5B]">Portfolio</h1>
                </div>
            </section>

            <section>
                <div className='flex flex-col w-[100%] pb-[100px] items-center justify-center h-[120vh] bg-gray-100'>

                    {/* 1-qator */}
                    <div className='flex gap-[30px] mt-[90px] w-[100%] items-center justify-center h-[90vh] bg-gray-100'>
                        {firstRow.map(project => (
                            <Link to={`/portfolio/${project.slug}`} key={project.id} className='block'>
                                <div className='flex box flex-col w-[350px] h-[50vh] bg-[#F9F8F8] shadow-gray-300 shadow-2xl rounded-[30px]'>
                                    <div
                                        className="w-[350px] h-[350px] bg-cover rounded-[20px] bg-center"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div>
                                        <h1 className='ml-[17px] mt-[14px] text-[#274C5B] font-bold'>{project.title}</h1>
                                        <p className='ml-[17px] nok text-[#7EB693]'>Farmer</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* 2-qator */}
                    <div className='flex gap-[30px] mt-[20px] w-[100%] items-center justify-center h-[90vh] bg-gray-100'>
                        {secondRow.map(project => (
                            <Link to={`/portfolio/${project.slug}`} key={project.id} className='block'>
                                <div className='flex box flex-col w-[350px] h-[50vh] bg-[#F9F8F8] shadow-gray-300 shadow-2xl rounded-[30px]'>
                                    <div
                                        className="w-[350px] h-[350px] bg-cover rounded-[20px] bg-center"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div>
                                        <h1 className='ml-[17px] mt-[14px] text-[#274C5B] font-bold'>{project.title}</h1>
                                        <p className='ml-[17px] nok text-[#7EB693]'>Farmer</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            <section>
                <Footer />
            </section>

            <section className='w-full h-[100vh] flex items-center justify-center'>
                <Lorader />
            </section>
        </div>
    );
};

export default Page2;