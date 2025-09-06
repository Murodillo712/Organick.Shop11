import React from 'react';
import Footer from './Footer';

const SingleService = () => {
    return (
        <div className="bg-white">
            <section className="w-full h-[40vh] relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/services.png')` }} />
                <h1 className="absolute text-white text-4xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Quality Standard
                </h1>
            </section>
            <section className='w-full h-[150vh] flex flex-col items-center justify-center gap-[80px]'>
                <div className='w-[1200px] h-[75vh] '>
                    <div className="W-[200px] h-[100%] mt-[30px] bg-cover rounded-[17px] bg-center" style={{ backgroundImage: `url('/erkak.png')` }} />
                </div>
                <div className='w-[700px] h-[105vh] flex items-center justify-center flex-col gap-[30px]  '>
                    <div className='w-full h-1/4   text-start'><h1 className='font-bold text-3xl'>Organic Store Services</h1>
                        <p className='text-[14px]'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a
                            <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                            <br />using 'Content here, content here', making it look like readable English.
                            <br /><br />
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,<br />
                            and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                    <div className='w-full flex h-1/4  gap-[30px] '> <div className=' boxx w-[270px] h-[180px] bg-cover ' style={{ backgroundImage: `url('/qol.png')` }} />
                        <div className='w-[410px] boxx h-[175px] rounded-2xl shadow pl-[30px] pt-[40px] items-center justify-center '>  <div className=' text-center  h-1'><h1 className=' text-start font-bold'>Why Organic</h1>
                            <p className='text-start text-[15px] '>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.</p></div>
                        </div>    </div>
                    <div className='w-full flex h-1/4  gap-[30px] '>
                        <div className='w-[410px] boxx h-[175px] rounded-2xl shadow pl-[30px] pt-[40px] items-center justify-center '>  <div className=' text-center  h-1'><h1 className=' text-start font-bold'>Why Organic</h1>
                            <p className='text-start text-[15px] '>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.</p></div>
                        </div>
                        <div className=' boxx w-[270px] h-[180px] bg-cover ' style={{ backgroundImage: `url('/gul.png')` }} />    </div>
                    <div className='w-full h-1/4 text-start'></div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SingleService;