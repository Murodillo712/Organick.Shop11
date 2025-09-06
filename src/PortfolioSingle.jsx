import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../src/projects';
import Footer from './Footer';
import uzum from '../public/uzum.png';
import cerrot from '../public/cerrot.png';

const PortfolioSingle = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <div className="text-center py-20 text-red-500">Project not found</div>;
    }


    return (
        <div>
            {/* Background Image */}
            <div className="relative h-screen bg-cover bg-center">
                <div
                    className="relative h-[70vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${uzum})` }}
                >
                    <div className="absolute top-[600px] flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl p-6 bg-white rounded-lg shadow-xl">

                        <div className="pb-[30px] gap-[20px] flex flex-col  justify-center text-start">
                            <h1 className="text-3xl font-bold text-[#274C5B]">Black Raspberry</h1>
                            <p className="text-gray-700 leading-relaxed text-[14px] ">
                                Established fact that a reader will be distracted by the readable content of a page <br />
                                when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less <br />
                                normal distribution of letters, as opposed </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div className="mt-[20px] gap-[4px] ml-[50px] flex flex-col justify-center  text-sm text-gray-600">
                                <div><strong>Date:</strong> {project.date}</div>
                                <div><strong>Client:</strong> {project.client}</div>
                                <div><strong>Category:</strong> {project.category}</div>
                                <div><strong>Service:</strong> Organic Products</div>
                            </div>
                        </div>






                    </div>
                </div>
            </div>
            <div className="container w-[50%] mx-auto my-10 space-y-8">
                <section className='gap-[8px] flex flex-col'>
                    <h2 className='n text-2xl mb-4'>About The Farm:</h2>
                    <p className='l text-[14px]'>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.
                    </p>
                    <p className='l text-[14px]'>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years  </p>

                </section>

                <div
                    className=" w-[100%] h-[40vh] inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cerrot})` }}
                />

                <section className='gap-[8px] flex flex-col'>

                    <h2 className='n text-2xl mb-4'>How To Farm:</h2>
                    <p className='l text-[14px]'>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.
                    </p>
                    <p className='l text-[14px]'>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years  </p>

                </section>

                <section className='gap-[8px] flex flex-col'>

                    <h2 className='n text-2xl mb-4'>Conclusion:</h2>
                    <p className='l text-[14px]'>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.
                    </p>
                    <p className='l text-[14px]'>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years  </p>
                </section>
            </div>


            <Footer />
        </div >
    );
};

export default PortfolioSingle;