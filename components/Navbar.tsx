import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container pr-40">
                <Link href="/"className="text-box pl-16">NeuroInsight</Link>
                <div className="navbar-links text-box">
                    <Link href="/about">About</Link>
                    <Link href="/approach">Our Approach</Link>
                    <Link href="/code">Code</Link>
                    <Link href="/papers">Papers</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;