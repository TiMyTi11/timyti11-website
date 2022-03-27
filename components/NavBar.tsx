import Link from "next/link";
import Logo from "../public/assets/logo_transparent.png";
import Image from "next/image";
import {Dispatch, SetStateAction} from "react";

export default function NavBar({theme, setTheme}: {theme: string, setTheme: Dispatch<SetStateAction<string>>}) {
    return (
        <header className="fixed min-w-full z-30 text-xl px-2 py-4 text-text font-semibold">
            <div className="mx-auto container navbar bg-base-300 rounded-2xl shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li className="px-2">
                                <Link href="/">
                                    <a>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="/portfolio">
                                    <a>
                                        Portfolio
                                    </a>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="/tos">
                                    <a>
                                        TOS
                                    </a>
                                </Link>
                            </li>
                            <li className="px-2" tabIndex={0}>
                                <a className="justify-between">
                                    Theme
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                                         height="24" viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                </a>
                                <ul className="p-2 bg-base-200">
                                    <li className="pb-2">
                                        <button className={theme === "dark" ? "btn-primary" : ""} onClick={() => setTheme("dark")}>Dark</button>
                                    </li>
                                    <li className="py-2">
                                        <button className={theme === "night" ? "btn-primary" : ""} onClick={() => setTheme("night")}>Night</button>
                                    </li>
                                    <li className="py-2">
                                        <button className={theme === "dracula" ? "btn-primary" : ""} onClick={() => setTheme("dracula")}>Dracula</button>
                                    </li>
                                    <li className="pt-2">
                                        <button className={theme === "forest" ? "btn-primary" : ""} onClick={() => setTheme("forest")}>Forest</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <a className="btn btn-ghost normal-case font-bold text-xl flex flex-row">
                            <Image className="mr-2" width={24} height={24} src={Logo} alt="TiMyTI11 Logo"/>
                            <p className="ml-2 my-auto">TiMyTi11</p>
                        </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className="px-2">
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="px-2">
                            <Link href="/portfolio">
                                <a>
                                    Portfolio
                                </a>
                            </Link>
                        </li>
                        <li className="px-2">
                            <Link href="/tos">
                                <a>
                                    TOS
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:block dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Theme</label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow-lg bg-base-200 rounded-box w-52 mt-4 font-bold">
                            <li className="pb-2">
                                <button className={theme === "dark" ? "btn-primary" : ""} onClick={() => setTheme("dark")}>Dark</button>
                            </li>
                            <li className="py-2">
                                <button className={theme === "night" ? "btn-primary" : ""} onClick={() => setTheme("night")}>Night</button>
                            </li>
                            <li className="py-2">
                                <button className={theme === "dracula" ? "btn-primary" : ""} onClick={() => setTheme("dracula")}>Dracula</button>
                            </li>
                            <li className="pt-2">
                                <button className={theme === "forest" ? "btn-primary" : ""} onClick={() => setTheme("forest")}>Forest</button>
                            </li>
                        </ul>
                    </div>
                    <a href="https://discord.gg/HS6wMTGD6u" className="ml-4 btn">Contact Me</a>
                </div>
            </div>
        </header>
    );
}
