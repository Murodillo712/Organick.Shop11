import React from "react";

export default function NewsCard({ image, date = "25  Nov", title, excerpt }) {
    return (
        <div className="relative w-full max-w-[500px]">
            <div className="relative rounded-xl overflow-hidden shadow-sm">
                <img src={image} alt={title} className="w-[600px] h-[40vh] object-cover" />
                <div className="absolute top-5 left-3 bg-white text-xs w-[50px] h-[50px] pt-3 pl-3 pr-1 rounded-full shadow">
                    {date}
                </div>
            </div>

            <div className="relative -mt-8 bg-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#7EB693] text-white flex items-center justify-center text-sm font-semibold">R</div>
                        <div>
                            <div className="text-xs text-gray-400">By Rachi Card</div>
                            <h3 className="font-semibold text-[#274C5B]">{title}</h3>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <button className="text-xs bg-yellow-100 text-[#274C5B] px-3 py-1 rounded-full">Read More</button>
                    </div>
                </div>

                <p className="text-sm text-gray-600">{excerpt}</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex -space-x-2">
                        <span className="w-8 h-8 rounded-full border-2 border-white bg-[#5aa36b] flex items-center justify-center text-xs text-white">A</span>
                        <span className="w-8 h-8 rounded-full border-2 border-white bg-[#3b82f6] flex items-center justify-center text-xs text-white">J</span>
                    </div>

                    <button className="bg-[#EFD372] text-sm px-4 py-2 rounded">Read More</button>
                </div>
            </div>
        </div>
    );
}