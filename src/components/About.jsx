import { useEffect, useRef } from 'react'
import './About.css'
import bbGif from '../assets/bbname.gif'
import bbAudio from '../assets/bbname.mp3'

const About = () => {
    const hasPlayedOnScroll = useRef(false);
    const sectionRef = useRef(null);

    const playAudio = () => {
        const audio = new Audio(bbAudio);
        audio.volume = 1.0;
        return audio.play();
    }

    useEffect(() => {
        const attemptPlay = () => {
            if (hasPlayedOnScroll.current) return;

            // Only play if section is currently intersecting
            const rect = sectionRef.current?.getBoundingClientRect();
            const isInView = rect && rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView) {
                playAudio().then(() => {
                    hasPlayedOnScroll.current = true;
                    // Clean up global listener once played
                    window.removeEventListener('click', attemptPlay);
                }).catch(() => {
                    // Fail silently, will retry on next observer trigger or click
                });
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                attemptPlay();
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Also try to play on the very first click anywhere on the page
        window.addEventListener('click', attemptPlay);

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            window.removeEventListener('click', attemptPlay);
        };
    }, []);

    return (
        <section id="about" ref={sectionRef} className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="section-underline"></div>
                </div>

                <div className="about-grid">
                    <div className="about-text glass">
                        <h3>Who am I?</h3>
                        <p>
                            I’m Justine, a frontend-focused software developer who enjoys building interactive and intuitive digital experiences.
                            I’m driven by curiosity and a constant desire to improve. Whether that’s refining UI details or designing systems that feel seamless to use.
                        </p>
                        <p>
                            I build with modern web technologies, focusing on clean code and scalable structure.
                            I care about thoughtful system design and long-term maintainability.
                            Outside the web space, I explore game development and interactive mechanics, merging logic with creativity.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">BSCS</span>
                                <span className="stat-label">Degree</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Finished Projects in GitHub</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Games Experienced</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual-container">
                        <div className="about-gif-frame" onClick={playAudio} style={{ cursor: 'pointer' }}>
                            <img src={bbGif} alt="Say My Name" className="about-gif" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
