import React from "react"

const sections = [
    {
        id: "profile",
        name: "Profile"
    },
    {
        id: "skills",
        name: "Skills"
    }, {
        id: "projects",
        name: "Projects"
    }, {
        id: 'contact',
        name: "Contact"
    },
]

export default function Header(props) {
    const currentSection = props.currentSection || 'projects';
    const { location } = props;
    const scrollToSection = (sectionId) => {
        if (location.pathname === "/") {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - 200;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',

                });
            }
        }
        else {

            window.location.replace(`/#${sectionId}`)
        }

    }
    return (
        <nav id="nav" className="fixed top-0 z-50  w-full p-5 h-[17vh] flex items-center justify-around bg-black">
            <div className="text-orange-600 text-4xl font-normal" onClick={() => window.location.replace('/')}>Rucheng Ren</div>
            <div>
                <ul className="flex text-white text-2xl font-normal space-x-5 ">
                    {sections.map((section, index) => (
                        <li key={index} onClick={() => scrollToSection(section.id)}
                            className={`cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-1 after:bg-orange-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${currentSection === section.id && "border-b-4 border-orange-800"}`}>{section.name}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}