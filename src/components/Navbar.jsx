import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar glass">
            <div className="container nav-container">
                <a href="#hero" className="nav-logo gradient-text">PORTFOLIO</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
