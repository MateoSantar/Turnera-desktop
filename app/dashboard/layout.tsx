import { Poppins } from 'next/font/google';
import Navlink from '@/app/ui/navlink'; 
const poppins = Poppins({ style: "normal", weight: "300" });
export default function DasboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen bg-black text-white">
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-white">
                <h1
                    className={`${poppins.className} text-5xl p-4 tracking-wider tracking-animate hover:tracking-[0.1em]`}
                >
                    HAIRCUT
                </h1>

                <nav className="flex flex-col items-center md:flex-row h-20">
                    <Navlink link="/dashboard" placeholder="Dashboard" />
                    <Navlink link="/dashboard/users" placeholder="Usuarios" />
                </nav>
            </div>
            {children}
        </main>
    );
}