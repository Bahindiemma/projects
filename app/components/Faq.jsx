import React from 'react'

function Faq() {
    return (
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
                Frequently Asked Questions
            </h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className="">
                    <p className="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12">
                        Here are few of the most frequently asked questions by our valueable
                        customers
                    </p>
                </div>
                <div className="border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full">
                    <input
                        placeholder="Search"
                        type="text"
                        aria-label="Search"
                        className="dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4"
                    />
                    <svg
                        className="cursor-pointer text-gray-600 dark:text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14 14L10 10"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className="md:w-5/12 lg:w-4/12 w-full">
                    <img
                        src="/images/lion.jpeg"
                        alt="Image of Glass bottle"
                        className="w-full md:block hidden"
                    />
                    <img
                        src="/images/lion.jpeg"
                        alt="Image of a Lion"
                        className="w-full md:hidden block"
                    />
                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* Shipping Section */}
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-xl  dark:text-white leading-5 text-gray-800">
                                How do I get to UWEC?
                            </h3>
                            <button
                                aria-label="too"
                                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                onclick="openAnsSection(1)"
                            >
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="path1"
                                        className=""
                                        d="M10 4.1665V15.8332"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.16602 10H15.8327"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p
                            id="para1"
                            className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                        >
                            The Uganda Wildlife Conservation Education Centre is located in Entebbe. Its 15 minutes from Entebbe International Airport, 36 kilometers from Uganda's capital Kampala.
                        </p>
                    </div>
                    <hr className="my-7 bg-gray-200" />
                    {/* Returns Section */}
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">
                                What are the opening hours?
                            </h3>
                            <button
                                aria-label="too"
                                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                onclick="openAnsSection(2)"
                            >
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="path2"
                                        className=""
                                        d="M10 4.1665V15.8332"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.16602 10H15.8327"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p
                            id="para2"
                            className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                        >
                            We are open between 8:00am and 6:00pm. You will not be allowed in if you show up at 6:00pm. For the best experience and time with the animals, we recommend that you visit by 4:00pm.
                        </p>
                    </div>
                    <hr className="my-7 bg-gray-200" />
                    {/* Exchange Section */}
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">
                                Do you offer accommodation?
                            </h3>
                            <button
                                aria-label="too"
                                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                onclick="openAnsSection(3)"
                            >
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="path3"
                                        d="M10 4.1665V15.8332"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.16602 10H15.8327"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p
                            id="para3"
                            className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                        >
                            Yes we do have accommodation within our premises at affordable prices.
                        </p>
                    </div>
                    <hr className="my-7 bg-gray-200" />
                </div>
            </div>
        </div>

    )
}

export default Faq