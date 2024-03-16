'use client'
import React from 'react'
import Link from 'next/link'
import classNames from 'classnames';
import { usePathname } from 'next/navigation'
import { GiAlienBug } from 'react-icons/gi'


const Navbar = () => {

    const currentPath = usePathname();

    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Issues", href: "/issues"}
    ]

    return (
        <nav className='flex space-x-8 border-b mb-5 p-5 items-center'>
            <Link href='/'><GiAlienBug size="2em"/></Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <li key={link.href}>
                        <Link 
                            href={link.href} 
                            className = {classNames({
                                'text-zinc-900': link.href === currentPath,
                                'text-zinc-500': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true
                            })}
                        > 
                            {link.label} 
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar