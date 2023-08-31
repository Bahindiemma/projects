import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Accommodation from '../components/Accommodation'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <section className="w-[80%] mx-auto my-6 p-4">
        <div class="container mx-auto">
          <form class="rounded-lg p-2 shadow-lg grid grid-cols-3 gap-2">
            <div class="mb-2 flex items-center">
              <input type="text" class="w-full rounded-lg border border-gray-400 p-2" placeholder="Are you coming alone or in a group?" />
            </div>
            <div class="mb-2 flex items-center">
              <input type="number" class="w-full rounded-lg border border-gray-400 p-2" placeholder="Number of Visitors" />
            </div>
            <div class="mb-2 flex items-center">
              <input type="date" class="w-full rounded-lg border border-gray-400 p-2" placeholder="When should we expect you?" />
              <button class="ml-2 rounded-lg bg-green-500 p-2 text-white hover:bg-green-600">Search</button>
            </div>
          </form>
        </div>
        <Accommodation />
      </section>
    <Footer />
    </div>
  )
}

export default page