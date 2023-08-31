import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

function Services() {
    const includedFeatures = [
        'Day Visits',
        'Keeper for Day',
        'Forest Trails',
    ];
    return (
        <>
            <h2 className="text-3xl text-center my-2 py-4 font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h2>
            <div className="grid lg:grid-cols-3 sm:w-[80%] w-full mx-auto my-6 py-6">
                <div className="relative max-w-sm mx-2 mb-2 rounded-lg shadow-lg">
                    <img
                        className="w-full h-64"
                        src="/images/service-1.png"
                        alt="product"
                    />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight  text-green-900">
                            Day Visits
                        </h4>
                        <p className="leading-normal text-gray-700">
                            General tour around the center.
                        </p>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5  text-gray-900">
                                    TOU0101— East African
                                    <p className="leading-normal text-gray-700">
                                        Adult(s) Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    UGX 10,000
                                </button>
                            </div>
                        </div>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5  text-gray-900">
                                    TOU0102— East African
                                    <p className="leading-normal text-gray-700">
                                        Children Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    UGX 5,000
                                </button>
                            </div>
                        </div>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5 text-gray-900">
                                    TOU0103— Resident Adult(s)
                                    <p className="leading-normal text-gray-700">
                                        Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    USD 10
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2 flex justify-between absolute bottom-0 left-0 w-full">
                        <a href="#" className="border-2 border-green-900 text-sm font-semibold leading-6 text-green-900 bg-white px-4 py-2 rounded mr-4">
                            More Info <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white bg-green-900 px-4 py-2 rounded">
                            Book Now
                        </a>
                    </div>

                </div>
                <div className="max-w-sm mx-2 mb-2 rounded-lg shadow-lg flex flex-col relative">
                    <img
                        className="w-full h-64"
                        src="/images/service-1.png"
                        alt="product"
                    />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight  text-green-900">
                            Keeper for Day
                        </h4>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5  text-gray-900">
                                    EXP0301— East African
                                    <p className="leading-normal text-gray-700">
                                        Adult(s) Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    UGX 100,000
                                </button>
                            </div>
                        </div>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5  text-gray-900">
                                    EXP0302— Non East African
                                    <p className="leading-normal text-gray-700">
                                        Adult(s) Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    USD 150
                                </button>
                            </div>
                        </div>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5 text-gray-900">
                                    EXP0303— Resident
                                    <p className="leading-normal text-gray-700">
                                        Adult(s) Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    USD 100
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2 flex justify-between absolute bottom-0 left-0 w-full">
                        <a href="#" className="border-2 border-green-900 text-sm font-semibold leading-6 text-green-900 bg-white px-4 py-2 rounded mr-4">
                            More Info <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white bg-green-900 px-4 py-2 rounded">
                            Book Now
                        </a>
                    </div>

                </div>
                <div className="max-w-sm mx-2 mb-2 rounded-lg shadow-lg relative">
                    <img
                        className="w-full h-64"
                        src="/images/service-3.jpeg"
                        alt="product"
                    />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight  text-green-900">
                            Forest Trails
                        </h4>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5  text-gray-900">
                                    TOU0201— Resident Adult(s)
                                    <p className="leading-normal text-gray-700">
                                        Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    USD 110
                                </button>
                            </div>
                        </div>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5  text-gray-900">
                                    TOU0202— Resident Kid(s)
                                    <p className="leading-normal text-gray-700">
                                        Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    USD 5
                                </button>
                            </div>
                        </div>
                        <hr className="my-3 bg-gray-200" />
                        <div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <h6 className="font-semibold text-base dark:text-white  leading-5 text-gray-900">
                                    TOU0203— Non Resident <br /> Adult(s)
                                    <p className="leading-normal text-gray-700">
                                        Any Day
                                    </p>
                                </h6>
                                <button
                                    aria-label="too"
                                    className=" text-green-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    onclick="openAnsSection(3)"
                                >
                                    USD 15
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2 flex justify-between">
                        <a href="#" className="border-2 border-green-900 text-sm font-semibold leading-6 text-green-900 bg-white px-4 py-2 rounded mr-4">
                            More Info <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white bg-green-900 px-4 py-2 rounded">
                            Book Now
                        </a>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Services;
