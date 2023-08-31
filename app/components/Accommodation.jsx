import React from 'react';
import Image from 'next/image';

function Accommodation() {
    return (
        <>
            {/* component */}
            <div className="w-full h-full">
                <dh-component>
                    <div className="flex flex-no-wrap">
                        {/* Sidebar starts */}
                        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
                        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                        <div
                            style={{ minHeight: 716 }}
                            className="w-64 absolute sm:relative bg-gray-100 rounded-lg shadow md:h-full flex-col justify-between hidden sm:flex"
                        >
                            <div className="px-2">
                                <ul className="mt-12">
                                    <h4 className="bold text-md text-justify mb-4">Room Facility</h4>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">Private Bathroom</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            1
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">Air Conditioning</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            25
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">See View</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            2
                                        </div>
                                    </li>
                                    <h4 className="bold text-md text-justify mb-2 mt-4">Property Rating</h4>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">1 star</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            1
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">2 stars</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            6
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">3 stars</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            23
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">4 stars</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            34
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">5 stars</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            17
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex flex-col">
                                                <label className="inline-flex items-center mt-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox rounded-md h-5 w-5 text-gray-600"
                                                        defaultChecked=""
                                                    />
                                                    <span className="ml-2 text-gray-700">Unrated</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="py-1 px-3 bg-green-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                            100
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Sidebar ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="grid grid-cols-1 gap-4 mx-auto py-6 h-48 md:w-4/5 w-11/12 px-2 mb-4">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-100 rounded border-2 border-gray-200">
                                <div class="grid grid-cols-3 gap-4">
                                    <div><Image width={100} height={100} className="w-full rounded-lg m-3 h-auto object-cover" src="/images/hotel-1.jpeg" /></div>
                                    <div class="col-span-2">
                                        <h1 className="m-3 text-xl font-bold">Hotel Protea</h1>
                                        <p className="px-3 text-sm leading-loose mb-6">
                                            Protea Hotel Entebbe offers accommodation in Entebbe. The hotel has a year-round outdoor pool and terrace, and guests can enjoy a drink at the bar. Every room comes with a flat-screen TV.
                                        </p>
                                        <a href="#" class="text-sm font-semibold leading-6 text-white bg-green-600 px-4 py-2 rounded mx-3">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-100 rounded border-2 border-gray-200">
                                <div class="grid grid-cols-3 gap-4">
                                    <div><Image width={100} height={100} className="w-full rounded-lg m-3 h-auto object-cover" src="/images/hotel-1.jpeg" /></div>
                                    <div class="col-span-2">
                                        <h1 className="m-3 text-xl font-bold">Hotel Protea</h1>
                                        <p className="px-3 text-sm leading-loose mb-6">
                                            Protea Hotel Entebbe offers accommodation in Entebbe. The hotel has a year-round outdoor pool and terrace, and guests can enjoy a drink at the bar. Every room comes with a flat-screen TV.
                                        </p>
                                        <a href="#" class="text-sm font-semibold leading-6 text-white bg-green-600 px-4 py-2 rounded mx-3">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-100 rounded border-2 border-gray-200">
                                <div class="grid grid-cols-3 gap-4">
                                    <div><Image width={100} height={100} className="w-full rounded-lg m-3 h-auto object-cover" src="/images/hotel-1.jpeg" /></div>
                                    <div class="col-span-2">
                                        <h1 className="m-3 text-xl font-bold">Hotel Protea</h1>
                                        <p className="px-3 text-sm leading-loose mb-6">
                                            Protea Hotel Entebbe offers accommodation in Entebbe. The hotel has a year-round outdoor pool and terrace, and guests can enjoy a drink at the bar. Every room comes with a flat-screen TV.
                                        </p>
                                        <a href="#" class="text-sm font-semibold leading-6 text-white bg-green-600 px-4 py-2 rounded mx-3">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </dh-component>
            </div>
        </>

    )
}

export default Accommodation