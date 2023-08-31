import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'

function page() {
    return (
        <div>
            <Navbar />
            <section className="w-[80%] mx-auto my-6 p-4">
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-green-500 h-[60vh]">
                        <Image width={400} height={400} className="w-full h-full object-cover" src="/images/hotel-1.jpeg" />
                    </div>
                    <div className="h-32 bg-green-500">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 bg-blue-500"></div>
                            <div className="h-32 bg-blue-500">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="h-14 bg-slate-900"></div>
                                    <div className="h-14 bg-slate-900"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-32 bg-green-500"></div>
                </div>
            </section>

        </div>
    )
}

export default page