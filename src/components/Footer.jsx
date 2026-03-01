import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitterX, BsHeart } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 mt-auto relative overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="section-container py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src="/assets/images/LOGO.png" alt="HeartBeat" className="h-15 w-50 brightness-0 invert opacity-80" />
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Connecting blood donors with those in need. Join our mission to save lives.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/register" className="hover:text-primary-400 transition-colors">Register as Donor</Link></li>
                            <li><Link to="/search" className="hover:text-primary-400 transition-colors">Find Blood</Link></li>
                            <li><Link to="/blogs" className="hover:text-primary-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                            <li className="text-gray-600">Uttar Pradesh, India</li>
                        </ul>
                    </div>

                    {/* Social + Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
                        <p className="text-sm mb-1">amt312002@gmail.com</p>
                        <p className="text-sm mb-4">+91 7985345837</p>
                        <div className="flex gap-3">
                            {[
                                { icon: <BsLinkedin />, href: 'https://www.linkedin.com/in/anoop--kumar/' },
                                { icon: <BsTwitterX />, href: 'https://www.twitter.com' },
                                { icon: <BsFacebook />, href: 'https://www.facebook.com' },
                            ].map(({ icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800/50 py-5">
                <p className="text-center text-xs text-gray-600 flex items-center justify-center gap-1">
                    © {new Date().getFullYear()} HeartBeat. Made with <BsHeart className="text-primary-500 text-[10px]" /> in India 🇮🇳
                </p>
            </div>
        </footer>
    );
}
