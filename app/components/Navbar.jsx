"use client";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const activitiesDropdown = [
    { title: 'Tours & Visits', url: '/activities/tours-and-visits' },
    { title: 'Experimental Activities', url: '/activities/experimental-activities' },
    { title: 'School Programs', url: '/activities/school-programs' },
    { title: 'Conservation Education', url: '/activities/conservation-education' },
    { title: 'Events & Venues', url: '/activities/events-and-venues' },
    { title: 'Rides', url: '/activities/rides' },
    { title: 'Promotional Materials', url: '/activities/promotional-materials' },
    { title: 'Others', url: '/activities/others' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl place-items-center justify-between p-4 lg:px-6 sm:h-[80px]" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/">
                        <span className="sr-only">UWEC</span>
                        <img className="h-14 w-auto" src="http://booking.uwec.ug/spacetheme/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-10">
                    <a href="/" className="text-lg font-semibold leading-6 text-gray-900">
                        Home
                    </a>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
                            Activities
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-50 mt-8 w-screen max-w-[250px] overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {activitiesDropdown.map((item) => (
                                        <div
                                            key={item.title}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a href={item.url} className="block font-semibold text-gray-900">
                                                    {item.title}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="/accommodations" className="text-lg font-semibold leading text-gray-900">
                        Accommodations
                    </a>
                    <a href="/pricing" className="text-lg font-semibold leading text-gray-900">
                        Pricing
                    </a>
                    <a href="#" className="text-lg font-semibold leading text-gray-900">
                        How to
                    </a>
                </Popover.Group>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end place-items-center ml-6 border-l-2 border-green-900 w-[15vw]">
                    <a href="/auth/login" class="text-lg font-semibold leading-6 text-black rounded">
                        Log in
                    </a>
                    <a href="/auth/signup" class="text-lg font-semibold leading-6 text-black px-4 py-2 rounded">
                        Sign Up
                    </a>
                    <a href="/booking" class="text-lg font-semibold leading text-white bg-green-900 py-2 p-2 rounded">
                        Book Now
                    </a>
                </div>

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-40 bg-black opacity-40" /> {/* Overlay behind the panel */}
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
