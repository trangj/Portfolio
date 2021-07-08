import React from 'react';
import Link from 'next/link';

const NavigationBar = () => {
    return (
        <nav className="sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
            < div className="flex items-center h-16 justify-center" >
                <div className="flex space-x-4 text-white">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/experience"><a>Experience</a></Link>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/blog"><a>Blog</a></Link>
                </div>
            </div >
        </nav >
    );
};

export default NavigationBar;
