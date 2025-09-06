import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sildebar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSearch = (q) => {
        const term = (q ?? query).trim();
        if (term) navigate(`/shop?search=${encodeURIComponent(term)}`);
        else navigate('/shop');
    };

    return (
        <div>
            <header className="w-full bg-white shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-10">
                    <div className="flex items-center gap-2">
                        <img src="/Logo.png" alt="Logo" className="h-10" />
                        <span className="text-2xl font-bold text-green-700">Organick</span>
                    </div>

                    <ul className="flex gap-6 text-gray-700">
                        <li className="hover:text-green-600 cursor-pointer">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="hover:text-green-600 cursor-pointer">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="relative group z-30 hover:text-green-600 cursor-pointer">
                            <span className="cursor-pointer hover:text-blue-500">Pages ▾</span>
                            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg w-40">
                                <li>
                                    <Link
                                        to="/page1"
                                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/page2"
                                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/page3"
                                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Team
                                    </Link>
                                </li>


                            </ul>
                        </li>
                        <Link to="/shop" >
                            <li className="hover:text-green-600 cursor-pointer">
                                Shop
                            </li>
                        </Link>
                        <Link to="/Projects" >
                            <li className="hover:text-green-600 cursor-pointer">Projects</li>
                        </Link>
                        <Link to="/News" >
                            <li className="hover:text-green-600 cursor-pointer">News</li>
                        </Link>
                    </ul>

                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                            placeholder="Search..."
                            className="rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <button
                            onClick={() => handleSearch()}
                            className="bg-[#7EB693] text-white p-2 -ml-12 flex rounded-full hover:bg-green-700"
                        >
                            🔍
                        </button>
                        <button className="flex items-center gap-2 border px-3 py-1 rounded-full hover:bg-gray-100">
                            🛒 Cart (0)
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Sildebar