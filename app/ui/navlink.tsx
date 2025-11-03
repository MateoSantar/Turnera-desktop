import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({ style: "normal", weight: "300" });

export default function Navlink(params:{placeholder:string,link:string}) {
    return(
            <Link
            href={params.link}
            className="h-full flex items-center px-6 hover:bg-white hover:text-black transition"
            >{params.placeholder}</Link>

    );
}