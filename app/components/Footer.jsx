import React from 'react'

function Footer() {
    return (
        <footer className="relative bg-green-900">
            <div
                className="mx-auto max-w-screen-xl space-y-4 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8"
            >

                <div
                    className="grid grid-cols-1 gap-8 border-b border-gray-100 pb-4 sm:grid-cols-2 lg:grid-cols-4 lg:pt-4"
                >
                    <div>
                        <p className="font-medium text-white">Services</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Day Visits
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Keeper for Day
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Forest Trails
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-white">How To Pay</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Via the URA website
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    VISA Card
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    MTN Mobile Money
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Airtel Money
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Cash
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-white">Helpful Links</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    UWEC website <span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Uganda Wild Life Authority <span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Ministry of Tourism <span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Uganda Revenue Authority <span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-white">Legal</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Terms of Use
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Cancellation of Use
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Rescheduling Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Copyright Section  */}
                <div className="sm:flex sm:items-center sm:justify-between mt-0 pt-0">
                    <div className="text-teal-600">
                        <p className="text-xs text-white">
                            &copy; 2023. Uganda Wild Life Education Center. All rights reserved.
                        </p>
                    </div>

                    <ul className="mt-2 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:opacity-75"
                            >
                                <span className="sr-only">Facebook</span>

                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:opacity-75"
                            >
                                <span className="sr-only">Twitter</span>

                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer