'use client';
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import bg_image from "@/public/bg_image.png";
import Footer from "../ui/footer";
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';

const poppins = Poppins({ style: "normal", weight: "300" });
export default function Page() {
    return (
        <div className="relative min-h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            <Image
                src={bg_image}
                alt="Fondo de la página de inicio de sesión"
                fill
                priority
                className="object-cover z-0 opacity-60 blur-sm"
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className={`flex flex-col items-center ${poppins.className} w-screen max-w-md p-8 pb-0 bg-white/10 backdrop-blur-md rounded-xl shadow-[0px_8px_24px_-4px_rgba(255,_255,_255,_0.4)] border border-white/20`}>
                <h1 className={`text-4xl tracking-wider text-white`}>HAIRCUT</h1>
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

                        <label className="w-full mt-10">
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
                        Registrar
                    </button>
                    <span className='text-sm flex flex-row justify-center mt-5'>
                        Ya se encuentra registrado?
                        <Link
                            href={"/"} /* Aca redirige al componente de login */
                            className="ml-1 text-blue-500"
                        >
                            Inicie sesión
                        </Link>
                    </span>
                </form>
                <Footer />
            </div>

        </div>

    );
}