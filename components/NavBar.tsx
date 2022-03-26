import Link from "next/link";

export default function NavBar() {
    return (
        <header className="text-xl px-2 py-4 header text-text font-bold">
            <div className="container navbar bg-base-300 rounded-2xl shadow-lg">
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
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">TiMyTi11</a>
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
                    <a className="btn">Contact Me</a>
                </div>
            </div>
        </header>
    );
}
