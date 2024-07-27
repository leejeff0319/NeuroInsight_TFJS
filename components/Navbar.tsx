import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="https://github.com/leejeff0319/NeuroInsight_TFJS"className="navbar=logo">NeuroInsight</Link>
                <div className="navbar-links">
                    <Link href="/about">About</Link>
                    <Link href="/approach">Our Approach</Link>
                    <Link href="/code">Code</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;