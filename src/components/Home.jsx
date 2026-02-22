import { useState, useEffect } from 'react'
import './Home.css'
import profileImg from '../assets/me.jpg'
import honkSound from '../assets/honk.mp3'

const Home = () => {
    const roles = [
        "A Software Developer",
        "A Frontend Developer",
        "A Backend Developer",
        "A Full-Stack Developer",
        "A Computer Science Graduate",
        "A Game Developer",
        "A Web & Mobile Developer"
    ]

    const [roleIndex, setRoleIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex]
            if (isDeleting) {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1))
                setTypingSpeed(50)
            } else {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1))
                setTypingSpeed(150)
            }

            if (!isDeleting && displayedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500)
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false)
                setRoleIndex((roleIndex + 1) % roles.length)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, roleIndex, roles])

    const playHonk = () => {
        const audio = new Audio(honkSound)
        audio.volume = 0.3;
        audio.play().catch(e => console.error("Audio playback failed:", e))
    }

    return (
        <section id="hero" className="home-section">
            <div className="bg"></div>
            <div className="container home-container">
                <div className="home-content">
                    <div className="home-text-box">
                        <div className="home-header">
                            <span className="hello-text gradient-text">Hello!</span>
                            <span className="name-intro">Name's </span>
                            <span className="name-highlight">Justine</span>
                            <span className="typewriter-text gradient-text">{displayedText}<span className="cursor">|</span></span>
                        </div>
                    </div>
                    <div className="home-cta">
                        <a href="#projects" className="btn-uiverse btn-works">What'd I do?</a>
                        <a href="#contact" className="btn-uiverse btn-contacts">Wanna know more?</a>
                    </div>
                </div>
                <div className="home-visual">
                    <div className="profile-frame" onClick={playHonk}>
                        <img src={profileImg} alt="Justine" className="profile-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
