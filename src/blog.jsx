import React from 'react'
import { Calendar, User } from "lucide-react";
import Footer from './Footer';

const Blog = () => {
    const posts = [
        {
            date: "25 Nov",
            title: "The Benefits of Vitamin D & How to Get It",
            author: "Rochi Carol",
            image: "./barg12.png",
        },
        {
            date: "25 Nov",
            title: "Our Favorite Summertime Tomato",
            author: "Rochi Carol",
            image: "./tomato1.png",
        },
        {
            date: "25 Nov",
            title: "Benefits of Vitamin C & How to Get It",
            author: "Rochi Carol",
            image: "./sabzabot.png",
        },
        {
            date: "25 Nov",
            title: "Research More Organic Foods",
            author: "Rochi Carol",
            image: "./odam12.png",
        },
        {
            date: "25 Nov",
            title: "Everyday Fresh Fruits",
            author: "Rochi Carol",
            image: "./qiz.png",
        },
        {
            date: "25 Nov",
            title: "Don’t Use Plastic Product! It’s Kill Nature",
            author: "Rochi Carol",
            image: "./chiqindi.png",
        },
    ];
    return (
        <div>
            <section>
                <div className="bg-[url('/barg4.png')] bg-cover bg-center h-[40vh] flex items-center justify-center rounded-b-lg">
                    <div className="bg-[url('/barg5.svg')] bg-cover bg-center h-[40vh] flex items-center justify-center rounded-b-lg"> <h1 className="text-5xl font-bold text-[#274C5B]">Our Team</h1></div>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-4 py-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden shadow-lg group"
                            >

                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-500"
                                />


                                <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 text-sm font-semibold shadow">
                                    <Calendar className="inline w-4 h-4 mr-1 text-green-600" />
                                    {post.date}
                                </div>


                                <div className="bg-white p-5">
                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                        <User className="w-4 h-4 mr-1" />
                                        By {post.author}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-green-600 font-semibold text-sm hover:underline"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Blog