import React from 'react'
import { Link } from 'react-router-dom';
import star from "../../../assets/bottomnav/star.svg";

export const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="flex shadow-md justify-between w-full bg-white p-8">
                    <a href="/"><span className="text-xl tracking-tight">Resepmau</span></a>
                    <div className="md:items-center md:w-auto flex">
                        <div className="md:flex hidden">
                            <a className="block md:text-gray-600 mr-4" href="/link">Link 1</a>
                            <a className="block md:text-gray-600 mr-4" href="/link">Link 2</a>
                            <a className="block md:text-gray-600 mr-4" href="/link">Link 3</a>
                            <a className="block md:text-gray-600 mr-4" href="/link">Link 4</a>
                        </div>
                        <div className="flex text-sm" v-else>
                            <a className="p-2 ml-2 text-gray-500 font-semibold leading-none border border-gray-300 rounded hover:text-black" href="/auth/signin">Login</a>
                            <a className="p-2 ml-2 bg-teal-500 text-gray-500 font-semibold leading-none border border-teal-600 rounded hover:text-black" href="/auth/signup">Sign up</a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="z-10 justify-evenly bg-white w-full items-stretch flex flex-1 flex-row p-4 absolute bottom-0 sm:visible xl:invisible md:invisible">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <img src={star} alt="star" />
                        <span>Home</span>
                    </div>
                </Link>

                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <img src={star} alt="star" />
                        <span>Explore</span>
                    </div>
                </Link>

                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <img src={star} alt="star" />
                        <span>Notification</span>
                    </div>
                </Link>

                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <img src={star} alt="star" />
                        <span>Profile</span>
                    </div>
                </Link>

            </div>

        </div>

    )
}