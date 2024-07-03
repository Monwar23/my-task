import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-[#020043] font-normal text-base">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#020043] rounded-box z-[1] mt-3 w-32 p-2 shadow text-white">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src="/Media/logo dark.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost font-medium border-[#020043] rounded-xl">Appointment<MdArrowOutward /> </a>
            </div>
        </div>
    );
};

export default Navbar;