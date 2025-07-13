import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Navigationbar = () => {
    const [active, setActive] = useState(false);

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
        <div className="navbar py-6 flex items-center justify-between container mx-auto px-4">
            <div className="logo p-1 md:bg-transparent">
                <a href="#">
                    <img src="/assets/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
                </a>
            </div>
            <ul
                className={`menu flex text-2xl items-center gap-4 md:static fixed left-1/2 -translate-x-1/2
                    md:-translate-x-0 md:opacity-100 bg-[#C59464]/30 backdrop-blur-md p-4 rounded-br-2xl
                    rounded-bl-2xl md:bg-transparent transition-all md:transition-none
                    ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
                style={{ fontFamily: 'Kenyan Coffee' }}
            >
                <li>
                <Link to="/home" className="bg-[#5F3826] text-white rounded-full px-7 py-1 hover:bg-[#C59464] hover:text-white transition-all">HOME
                </Link>
                </li>
                <li>
                    <Link to="/tentang" className="bg-[#5F3826] text-white rounded-full px-7 py-1 hover:bg-[#C59464] hover:text-white transition-all">TENTANG
                </Link>
                </li>
                <li>
                    <a href="/menu" className="bg-[#5F3826] text-white rounded-full px-7 py-1 hover:bg-[#C59464] hover:text-white transition-all">MENU</a>
                </li>
                <li>
                    <a href="#" className="bg-[#5F3826] text-white rounded-full px-7 py-1 hover:bg-[#C59464] hover:text-white transition-all">INFORMASI</a>
                </li>
                <li>
                    <a href="#" className="bg-[#5F3826] text-white rounded-full px-7 py-1 hover:bg-[#C59464] hover:text-white transition-all">TESTIMONI</a>
                </li>
                <li>
                    <a href="#" className="bg-[#5F3826] text-white rounded-full px-7 py-1 hover:bg-[#C59464] hover:text-white transition-all">KONTAK</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigationbar;
