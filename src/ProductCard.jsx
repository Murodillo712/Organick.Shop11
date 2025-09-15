export default function ProductCard({ label, image, name, oldPrice, price }) {
    return (
        <div className="bg-gray-100 rounded-md  p-4 w-full max-w-xs">
            <div className="relative w[400px] bg-amber-50">
                <img src={image} alt={name} className=" boxs overflow-hidden border-amber-50 rounded-md  w-[800px] h-48 object-cover" />
                <span className="absolute top-2 left-2 bg-[#274C5B] text-white text-xs px-2 py-1 rounded">{label}</span>
            </div>
            <h3 className="mt-4 font-semibold text-gray-700">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-500 line-through">${oldPrice}</span>
                <span className="text-[#274C5B] font-bold">${price}</span>
                <span className="pl-[50px]">        <div className="flex mt-2 gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className="w-4 h-8 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 15l-5.878 3.09L5.34 11.18 0.68 7.18l6.09-.9L10 1l3.23 5.28 6.09.9-4.66 4L15.88 18z" />
                        </svg>
                    ))}
                </div></span>
            </div>

        </div>
    );
}
