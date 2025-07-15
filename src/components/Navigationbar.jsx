import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    const [active, setActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar py-4 flex items-center justify-between container mx-auto px-4 relative z-50">
            <div className="logo p-1 md:bg-transparent">
                <Link to="/">
                    <img src="/assets/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
                </Link>
            </div>

            <button
                className="md:hidden z-50"
                onClick={() => setIsOpen(!isOpen)} // 🔄
            >
                <svg className="w-6 h-6 text-[#5F3826]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            <ul
                className={`
                    menu flex flex-col md:flex-row text-xl md:text-2xl items-center gap-4 
                    md:static absolute top-20 md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0
                    ${isOpen ? "block" : "hidden"} md:flex
                    bg-[#C59464]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 px-6 py-4 md:p-0
                    rounded-xl md:rounded-none transition-all duration-300 ease-in-out
                `}
                style={{ fontFamily: 'Kenyan Coffee' }}
            >
                <li>
                    <Link to="/home" className="bg-[#5F3826] text-white rounded-full px-6 py-2 hover:bg-[#C59464] transition-all">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/tentang" className="bg-[#5F3826] text-white rounded-full px-6 py-2 hover:bg-[#C59464] transition-all">
                        TENTANG
                    </Link>
                </li>
                <li>
                    <Link to="/menu" className="bg-[#5F3826] text-white rounded-full px-6 py-2 hover:bg-[#C59464] transition-all">
                        MENU
                    </Link>
                </li>
                <li>
                    <Link to="/informasi" className="bg-[#5F3826] text-white rounded-full px-6 py-2 hover:bg-[#C59464] transition-all">
                        INFORMASI
                    </Link>
                </li>
                <li>
                    <Link to="/testimoni" className="bg-[#5F3826] text-white rounded-full px-6 py-2 hover:bg-[#C59464] transition-all">
                        TESTIMONI
                    </Link>
                </li>
                <li>
                    <Link to="/kontak" className="bg-[#5F3826] text-white rounded-full px-6 py-2 hover:bg-[#C59464] transition-all">
                        KONTAK
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigationbar;
