import React from 'react'

const Footer = () => {
    return (<>
        <section className="w-full h-[50vh] mx-auto pb-[22px] px-6 py-12">
            <div className="bg-[url('/limon.png')] bg-cover bg-center rounded-2xl overflow-hidden p-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-[#274C5B]">Subscribe to our Newsletter</h3>
                        <p className="text-sm text-[#274C5B] mt-2">Get updates about new products & offers</p>
                    </div>
                    <form className="flex gap-3 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="px-4 py-3 rounded-md border border-gray-400 w-full md:w-[320px]"
                        />
                        <button className="bg-[#274C5B] text-white px-5 py-3 rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>

        <footer className="bg-white h-[100vh]  mt-[20px]">
            <div className="w-full h-a[60vh] flex items-center justify-center gap-20">
                <div className='flex h-[190px] text-end flex-col border-r pr-[20px] my-[2px] ml-[10px] border-gray-300'>
                    <h2 className="font-bold text-2xl text-[#274C5B] mb-3">Contact Us</h2>
                    <p className="text-sm font-bold text-gray-600">Email<br /><span className="text-xs font-medium text-gray-500">needhelp@Organia.com</span></p>
                    <p className="text-sm font-bold text-gray-600 mt-3">Phone<br /><span className="text-xs font-medium text-gray-500">666 888 888</span></p>
                    <p className="text-sm font-bold text-gray-600 mt-3">Address<br /><span className="text-xs font-medium text-gray-500">88 road, borklyn street, USA</span></p>
                </div>

                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="/Logo.png" alt="Logo" className="h-10" />
                        <h2 className="text-2xl font-bold text-[#274C5B]">Organick</h2>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Simply dummy text of the printing and typesetting industry. <br />
                        Lorem Ipsum simply dummy text of the printing </p>
                    <div className="flex items-center justify-center gap-4">
                        <a target="_blank" href="https://www.instagram.com/murodillo_khan" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"><FaInstagram /></a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61565984144551" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"><FaFacebook /></a>
                        <a className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"><FaTwitter /></a>
                        <a className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"><FaPinterest /></a>
                    </div>
                </div>

                <div className='flex flex-col border-l pl-[30px] mr-[10px] border-gray-300'>
                    <h2 className="text-2xl font-bold text-[#274C5B]  mb-3">Utility Pages</h2>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>Style Guide</li>
                        <li>404 Not Found</li>
                        <li>Password Protected</li>
                        <li>Licences</li>
                        <li>Changelog</li>
                    </ul>
                </div>
            </div>

            <div className="border-t mt-[70px]">
                <div className="max-w-7xl mx-auto px-6 py-4  text-center text-sm text-gray-500">
                    <p>
                        Copyright © <span className='font-bold'>Organick</span> | Designed by <span className='font-bold'>VictorFlow</span> Templates - Powered by{" "}
                        <a target="_blank" href="https://t.me/photo_okeans_0108" className="text-gray-600 font-bold hover:underline">
                            Murodillo
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </>

    )
}

export default Footer