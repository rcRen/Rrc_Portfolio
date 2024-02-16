import React from "react"

export default function Footer({ children }) {
    return (
        <footer className="text-center space-y-6 m-1">
            <nav className="pb-1 ">
                <ul className="flex text-2xl font-normal space-x-5 justify-center">
                    <li className="hover:border-b-2 border-orange-700"><a href="#profile">Profile</a></li>
                    <li className="hover:border-b-2 border-orange-700"><a href="#skills">Skills</a></li>
                    <li className="hover:border-b-2 border-orange-700"><a href="#projects">Projects</a></li>
                    <li className="hover:border-b-2 border-orange-700"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <p className="mt-1 text-gray-500">Copyright &#169; 2024 Rucheng Ren. All Rights Reserved.</p>
        </footer>
    )
}