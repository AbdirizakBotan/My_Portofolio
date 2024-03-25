import { Link } from "react-router-dom"
import { useRef, useState } from "react"
function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    const aboutRef = useRef(null);

    const handleLinkClick = (section) => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', });
        }
    };
    return <div>
        <div className="flex mt-2 text-blue-600  text-3xl justify-between">
            <Link to="/"><h1 className="sm:ml-12 ml-4 text-4xl font-semibold">Eng Botan</h1></Link>
            <i onClick={handleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-4xl absolute text-blue-600 right-4 sm:hidden fa-bars"></i>
        <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-4xl absolute text-blue-600  right-4 hidden fa-xmark"></i>
        <div className="hidden sm:mr-12 md:flex space-x-10">
            <Link className="hover:text-blue-950 text-4xl">Home</Link>
            <Link onClick={() => handleLinkClick("projects")} className="hover:text-blue-950 text-4xl">Projects</Link>
            <Link onClick={() => handleLinkClick("about")} className="hover:text-blue-950 text-4xl">About</Link>
        </div>
        </div>

        <div style={{ display: isOpen === true ? "block" : "" }} className="hidden">
            <div className="flex text-blue-600 flex-col space-y-4 pt-16 pl-[7.9em] text-3xl">
                <Link onClick={() => handleLinkClick("home")} className="hover:text-blue-950 text-4xl">Home</Link>
                <Link onClick={() => handleLinkClick("projects")} className="hover:text-blue-950 text-4xl">Projects</Link>
                <Link onClick={() => handleLinkClick("about")} className="hover:text-blue-950 text-4xl">About</Link>
            </div>
            </div>
    </div>
}
export default Header