import React from "react";
import Link from "next/link";
import Image from 'next/image';
import localFont from '@next/font/local'

// const myFont = localFont({ src: '/fonts/VersatyloRounded/Web-PS/VersatyloRounded.woff2' });

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className="navbar-container pr-40">
                <Link href="/"className="text-box pl-16">
                    <Image
                    src="/brain_logo.jpg" 
                    width={100}
                    height={50}
                    alt="logo of the website"
                    />
                    <div className="logo-text ml-4">
                        NeuroQ
                    </div>
                </Link>
                <div className="navbar-links text-box text-lg">
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