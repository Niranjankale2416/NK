import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Education", label: "Education" },
        { href: "#Experience", label: "Experience" },
        { href: "#Portfolio", label: "Portfolio" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            const sections = navItems
                .map((item) => {
                    const section = document.querySelector(item.href);
                    if (!section) return null;
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 120,
                        height: section.offsetHeight,
                    };
                })
                .filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(
                (section) =>
                    currentPosition >= section.offset &&
                    currentPosition < section.offset + section.height
            );

            if (active) setActiveSection(active.id);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                isOpen
                    ? "bg-[#030014] opacity-100"
                    : scrolled
                    ? "bg-[#030014]/50 backdrop-blur-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#Home"
                        onClick={(e) => scrollToSection(e, "#Home")}
                        className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                    >
                        NK
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`relative px-2 py-2 text-sm font-medium transition-colors duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                        : "text-[#e2d3fd] hover:text-white"
                                }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out ${
                            isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                        }`}
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-40 bg-[#030014] transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-hidden={!isOpen}
            >
                <div className="flex flex-col h-full items-center justify-center space-y-6">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`text-lg font-medium transition-all duration-300 ${
                                activeSection === item.href.substring(1)
                                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                    : "text-[#e2d3fd] hover:text-white"
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? "translateX(0)" : "translateX(50px)",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
