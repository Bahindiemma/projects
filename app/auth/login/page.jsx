import React from 'react'

function page() {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-96 p-6 shadow-lg bg-gray-100 rounded-md border-2 border-green-600">
                <h1 className="text-3xl block text-center font-semibold text-green-600">
                    <i className="fa-solid fa-user" /> Login
                </h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label htmlFor="username" className="block text-base mb-2 text-slate-800">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="border text-green-600 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="password" className="block text-base mb-2 text-slate-800">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border w-full text-base text-green-600 rounded-md px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    />
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div>
                        <input type="checkbox" className="px-2 rounded-sm" />
                        <label className="text-green-600 ml-2">Remember Me</label>
                    </div>
                    <div>
                        <a href="#" className="text-green-800 font-semibold">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        className="border-2 mb-4 border-green-700 bg-green-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-green-700 font-semibold"
                    >
                        <i className="fa-solid fa-right-to-bracket" />
                        &nbsp;&nbsp;Login
                    </button>
                    <a href="/auth/signup" className="text-green-600 font-semibold">
                        Don't have an account? Sign Up
                    </a>
                </div>
            </div>
        </div>

    )
}

export default page