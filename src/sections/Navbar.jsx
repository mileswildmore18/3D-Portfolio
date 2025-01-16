import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        // Make Navbar reusable
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {
                    }}>{name}</a>
                </li>
            ))}
        </ul>
    )
}
const Navbar = () => {
    // Toggle Menu effect
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => setIsOpen((prevIsOpen) => (!prevIsOpen));
    return (
        <header className="fixed-top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    {/* Link Navbar to another page and change colour on hover */}
                    <a href='/' className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Miles Wildmore
                    </a>
                    {/* Toggle Button */}
                    <button onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu">
                        {/* Determine the state of the button if it is open or closed */}
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>
                    {/* Nav links */}
                    <nav className="sm:flex hidden">
                        {/* Nav items and links */}
                        <NavItems/>
                    </nav>
                </div>
            </div>
            {/* Show only on Mobile for Menu bar  */}
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                {/* Display nav items in mobile view */}
                <nav className='p-5'>
                    <NavItems/>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
