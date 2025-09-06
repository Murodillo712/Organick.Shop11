// ...existing code...
import React from "react";

export default function Card({ label, image, name, oldPrice, price, rating = 5 }) {
    return (
        <div className="bg-white rounded-2xl p-4 w-full max-w-xs shadow-md">
            <div className="relative rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover block"
                    loading="lazy"
                />
                {label && (
                    <span className="absolute top-3 left-3 bg-[#274C5B] text-white text-xs px-2 py-1 rounded">
                        {label}
                    </span>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#274C5B]">{name}</h3>

                <div className="flex items-center gap-1" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"} fill-current`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 15l-5.878 3.09L5.34 11.18 0.68 7.18l6.09-.9L10 1l3.23 5.28 6.09.9-4.66 4L15.88 18z" />
                        </svg>
                    ))}
                </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <div>
                    {oldPrice != null && (
                        <div className="text-xs text-gray-400 line-through">${Number(oldPrice).toFixed(2)}</div>
                    )}
                    <div className="text-lg font-bold text-[#274C5B]">${Number(price).toFixed(2)}</div>
                </div>

                <button className="text-sm bg-[#7EB693] hover:bg-[#6aa784] text-white px-3 py-1 rounded-md">
                    Add
                </button>
            </div>
        </div>
    );
}
