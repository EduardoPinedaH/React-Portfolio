import React from "react";
import {BsFillMoonFill, BsStackOverflow} from "react-icons/bs";
import Image from "next/image";
import logoWhite from "../public/logo_white.svg";
import Link from "next/link";

export default function Nav({setDarkMode, darkMode}) {
    return (
        <nav className="py-10 mb-12 flex justify-between">
            <Link href="/"><Image src={logoWhite} width={50} height={50} alt="logoBlack" className=" invert dark:invert-0"/></Link>
            <ul className="flex items-center">
                <li><Link href="/projects" className="font-poppins px-8 font-semibold dark:text-slate-100">Portfolio</Link></li>
                {/* <li><Link href="/contact" className="font-poppins pl-2 pr-10 font-semibold dark:text-slate-100">Contact</Link></li> */}
                <li><BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl 
                    text-sky-950 hover:text-slate-600 dark:text-slate-100 dark:hover:text-sky-950"/></li>
                <li><a className="bg-sky-950 text-white font-medium px-4 py-2 rounded-md ml-8 font-visby 
                    dark:bg-slate-100 dark:text-sky-950 hover:bg-slate-600 dark:hover:bg-sky-950 dark:hover:text-slate-300" href="#">CV</a></li>
            </ul>
        </nav>
    );
}