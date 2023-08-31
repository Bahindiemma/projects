"use client"
// Import statements remain the same
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import api from '../../api/api';

const registerUser = async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
};

// Function component name should start with a capital letter
function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const registrationMutation = useMutation(registerUser, {
        onSuccess: () => {
            // Handle successful registration
            alert('Registration successful!');
            // You might want to redirect the user or take other actions here
        },
        onError: (error) => {
            // Handle registration error
            alert('Registration failed: ' + error.message);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        registrationMutation.mutate(formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <form onSubmit={handleSubmit} className="w-96 p-6 shadow-lg bg-gray-100 rounded-md border-2 border-green-600">
                <h1 className="text-3xl block text-center font-semibold text-green-600">
                    <i className="fa-solid fa-user" /> Sign Up
                </h1>
                <hr className="mt-3" />
                <div className="grid grid-cols-2 gap-2">
                    {/* Input fields for first name and last name */}
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="mt-3">
                        <label htmlFor="username" className="block text-base mb-2 text-slate-800">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border text-green-600 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        />
                    </div>
                    <div className="mt-3">
                        {/* Email input field */}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="mt-3">
                        {/* Password input field */}
                    </div>
                    <div className="mt-3">
                        {/* Confirm password input field */}
                    </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    {/* Remember Me checkbox and Forgot Password link */}
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        disabled={registrationMutation.isLoading}
                        className="border-2 mb-4 border-green-700 bg-green-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-green-700 font-semibold"
                    >
                        <i className="fa-solid fa-right-to-bracket" />
                        &nbsp;&nbsp;Sign Up
                    </button>
                    <a href="/auth/login" className="text-green-600 font-semibold">
                        Already have an account? Login
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Page; // Make sure to export with a capital letter
