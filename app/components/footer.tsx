import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({ style: "normal", weight: "300" });
export default function Footer() {

    return (
        <footer className={`${poppins.className} text-center text-white text-sm mt-10 mb-2`}>
            HAIRCUT | Made by <Link href={"https://github.com/MateoSantar"} className="text-blue-300">Mateo Santariero</Link>
        </footer>
    );
}