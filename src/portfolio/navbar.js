import React from "react"
import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <header className="bg-gray-50">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                     to="work" 
                     activeClassName="text-gray-900 underline"
                     className="inline-flex items-center py-3 px-0 mr-5 rounder text-xl text-gray-500 font-thin hover:text-yellow-700">
                    Work
                    </NavLink>
                    <NavLink 
                     to="about" 
                     activeClassName="text-gray-900 underline"
                     className="inline-flex items-center py-3 px-5 mr-4 rounder text-xl text-gray-500 font-thin hover:text-yellow-700"
                    >
                    About
                    </NavLink>
                    <NavLink 
                     to="/" 
                     exact 
                     activeClassName="text-gray-700" 
                     className="align-self-flex-end py-3 px-5 ml-20 text-gray-400 hover:text-yellow-400 text-6xl font-thin tracking-wide"
                    >
                    Krystian Damian Krawczyk
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}