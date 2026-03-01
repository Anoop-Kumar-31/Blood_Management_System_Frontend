import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/register', label: 'Donate' },
    { to: '/search', label: 'Find Blood' },
    { to: '/blood-banks', label: 'Gov. Blood Banks' },
    { to: '/blogs', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100 shadow-sm">
            <div className="section-container flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <img src="/assets/images/LOGO.png" alt="HeartBeat" className="h-12 w-35 group-hover:scale-105 transition-transform duration-200 brightness-190" />
                    <span className="text-xs text-gray-400 italic self-end">This is a dummy project!</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ to, label }) => {
                        const isActive = location.pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50/60'
                                    }
                                    ${to === '/blood-banks' ? 'text-green-600 bg-green-100' : ''}
                                    `}
                            >
                                {label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-500 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <HiOutlineX className="w-6 h-6" />
                    ) : (
                        <HiOutlineMenu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg animate-fade-in-up">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map(({ to, label }) => {
                            const isActive = location.pathname === to;
                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => setOpen(false)}
                                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:bg-gray-50'}
                                    ${to === '/blood-banks' ? 'text-green-600 bg-green-100' : ''}
                                    `}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
