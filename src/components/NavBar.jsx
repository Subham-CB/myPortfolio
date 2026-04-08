import React, {useEffect, useRef, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`} ref={menuRef}>
            <div className="inner">
                <a className="logo" href="#hero">
                    S | D
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link,name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}

                        <a href={`${import.meta.env.BASE_URL}CV/SubhamDey_CV.pdf`} download className="group">
                        <div className="inner">
                                <span>Download CV</span>
                                <span className="underline"/>
                            </div>
                        </a>
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group hidden lg:flex">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>

                <button
                    className="hamburger lg:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`bar ${menuOpen ? 'open' : ''}`}/>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}/>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}/>
                </button>
            </div>

            <nav className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`} aria-hidden={!menuOpen}>
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name}>
                            <a href={link} onClick={closeMenu}>{name}</a>
                        </li>
                    ))}
                    <li>
                        <a href={`${import.meta.env.BASE_URL}CV/SubhamDey_CV.pdf`} download onClick={closeMenu}>
                            Download CV
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu} className="mobile-contact-btn">
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
