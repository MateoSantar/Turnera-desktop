'use client';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
const poppins = Poppins({ style: "normal", weight: "300" });
export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className='flex flex-col items-center'>
            <h1 className={`text-4xl ${poppins.className} tracking-wider text-white`}>HAIRCUT</h1>
            <form
                className="bg-white p-4 rounded-sm w-100 mt-5"
                onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: manejar login
                }}
            >
                <header className="py-4 flex flex-col items-center">
                    <label className="w-full">
                        <div className="flex items-center bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                            <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                required
                                className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400 pl-3"
                                aria-label="Correo electrónico"
                            />
                        </div>

                    </label>

                    <label className="w-full mt-6">
                        <div className="flex items-center bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                            <KeyIcon className="w-5 h-5 text-gray-500" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                required
                                className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400 pl-3"
                                aria-label="Contraseña"
                            />
                        </div>

                    </label>
                </header>

                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-2 mt-4 rounded-sm cursor-pointer hover:bg-blue-500 active:bg-blue-700"
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
}