import React, { useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
export default function Layout({ children, location, className }) {
    const [currentSection, setCurrentSection] = useState(null)
    useEffect(() => {
        const isElementVisible = (element) => {
            if (!element) return false;

            const elementRect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Check if the element is in the viewport
            const isElementInViewport = (
                elementRect.bottom > 0 &&
                elementRect.top < windowHeight / 2
            );

            return isElementInViewport;
        };

        const handleScroll = () => {
            const sectionIds = ["profile", "skills", "projects", "contact"];
            sectionIds.map((sectionId) => {
                const section = document.getElementById(sectionId);
                if (isElementVisible(section)) {
                    setCurrentSection(sectionId)
                }
            })
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={`bg-fixed ${className}`}>
            <Header currentSection={currentSection} location={location} />
            <main>
                {children}
            </main>
            <Footer location={location} />
        </div>
    )
}
