import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

function page() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[url('/images/animals.jpg')] bg-no-repeat bg-center bg-cover flex flex-wrap items-center  justify-center  ">
                <div className="flex sm:skew-y-2 sm:-translate-x-72 flex-col sm:mt-12 sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
                    <div className="py-12 sm:hover:scale-105 sm:rounded-tl-3xl sm:rounded-bl-3xl sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                        <div className="flex justify-between">
                            <h1 className="text-gray-500 font-semibold text-xl ">Unrated</h1>
                            <h1 className="font-semibold text-md text-green-600">Imperial Hotel</h1>
                        </div>
                        <div className="text-center py-4 px-7">
                            <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
                            <p className="text-gray-500  mt-2">Daily</p>
                        </div>
                        <div className="h-px bg-gray-200" />
                        <div className="text-center mt-3">
                            <div className="text-center mt-3">
                                <Image src="/images/hotel-2.avif" className="w-full" width={300} height={300} alt="Hotel Image" />
                            </div>
                        </div>
                        <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                            Book Now
                        </button>
                    </div>
                    <div className="sm:hover:scale-110 py-12 sm:rounded-3xl sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-green-600 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                        <div className="flex justify-between">
                            <h1 className="text-white font-semibold text-xl ">1 Start</h1>
                            <h1 className="text-gray-700 font-semibold text-md ">Protea Hotel</h1>
                        </div>
                        <div className="text-center py-4 px-7">
                            <h1 className="text-white text-4xl font-black">$399.00</h1>
                            <p className="text-gray-100  mt-2">Daily</p>
                        </div>
                        <div className="h-px bg-green-400" />
                        <div className="text-center mt-3">
                            <Image src="/images/hotel-1.jpeg" className="w-full" width={300} height={300} alt="Hotel Image" />
                        </div>
                        <button className="animate-bounce hover:animate-none w-full mt-6 mb-3 py-2 text-white font-semibold bg-green-400 hover:shadow-xl duration-200 hover:bg-green-800">
                            Book Now
                        </button>
                    </div>
                    <div className="hover:ease-in sm:hover:scale-105 sm:rounded-tr-3xl sm:rounded-br-3xl duration-300 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                        <div className="flex justify-between">
                            <h1 className="text-gray-500 font-semibold text-xl ">2 Star</h1>
                            <h1 className="font-semibold text-md text-green-600">Enrol Hotel</h1>
                        </div>
                        <div className="text-center py-4 px-7">
                            <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
                            <p className="text-gray-500  mt-2">Daily</p>
                        </div>
                        <div className="h-px bg-gray-200" />
                        <div className="text-center mt-3">
                            <div className="text-center mt-3">
                                <Image src="/images/hotel-3.jpeg" className="w-full" width={300} height={300} alt="Hotel Image" />
                            </div>
                        </div>
                        <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                            Book Now
                        </button>
                    </div>
                </div>
                <div className="flex sm:skew-y-2 sm:translate-x-72 flex-col sm:my-16 sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
                    <div className="py-12 sm:hover:scale-105 sm:rounded-tl-3xl sm:rounded-bl-3xl sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                        <div className="flex justify-between">
                            <h1 className="text-gray-500 font-semibold text-xl ">3 Star</h1>
                            <h1 className="font-semibold text-md text-green-600">Enrol Hotel</h1>
                        </div>
                        <div className="text-center py-4 px-7">
                            <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
                            <p className="text-gray-500  mt-2">Daily</p>
                        </div>
                        <div className="h-px bg-gray-200" />
                        <div className="text-center mt-3">
                            <div className="text-center mt-3">
                                <Image src="/images/hotel-4.webp" className="w-full" width={300} height={300} alt="Hotel Image" />
                            </div>
                        </div>
                        <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                            Book Now
                        </button>
                    </div>
                    <div className="sm:hover:scale-110 sm:rounded-3xl py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-green-600 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                        <div className="flex justify-between">
                            <h1 className="text-gray-100 font-semibold text-xl ">4 Star</h1>
                            <h1 className="font-semibold text-md text-gray-700">Enrol Hotel</h1>
                        </div>
                        <div className="text-center py-4 px-7">
                            <h1 className="text-white text-4xl font-black">$399.00</h1>
                            <p className="text-white text-opacity-50 mt-2">Daily</p>
                        </div>
                        <div className="h-px bg-green-400" />
                        <div className="text-center mt-3">
                            <div className="text-center mt-3">
                                <Image src="/images/hotel-2.avif" className="w-full" width={300} height={300} alt="Hotel Image" />
                            </div>
                        </div>
                        <button className="animate-bounce w-full mt-6 mb-3 py-2 text-white font-semibold bg-green-400 hover:shadow-xl duration-200 hover:bg-green-800">
                            Book Now
                        </button>
                    </div>
                    <div className="hover:ease-in sm:hover:scale-105 sm:rounded-tr-3xl sm:rounded-br-3xl duration-300 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                        <div className="flex justify-between">
                            <h1 className="text-gray-500 font-semibold text-xl ">5 Star</h1>
                            <h1 className="font-semibold text-md text-green-600">Enrol Hotel</h1>
                        </div>
                        <div className="text-center py-4 px-7">
                            <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
                            <p className="text-gray-500  mt-2">Daily</p>
                        </div>
                        <div className="h-px bg-gray-200" />
                        <div className="text-center mt-3">
                            <div className="text-center mt-3">
                                <Image src="/images/hotel-5.jpeg" className="w-full" width={300} height={300} alt="Hotel Image" />
                            </div>
                        </div>
                        <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page