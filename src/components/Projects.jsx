import './Projects.css'
import pImg from '../assets/p.png'
import kmImg from '../assets/km.png'
import eosImg from '../assets/eos.png'

const Projects = () => {
    const projectList = [
        {
            title: "My Portfolio",
            category: "WEB DEVELOPMENT",
            description: "A React portfolio of my stuffs designed with random stuff that comes in mind. Built to showcase both my technical skill and design sensibility through performance-focused architecture and responsive layout design.",
            image: pImg,
            role: "Frontend Developer",
            focus: "UI Design & Component Architecture",
            link: "#hero"
        },
        {
            title: "Kalayo Mayon",
            category: "GAME DESIGN (THESIS)",
            description: "A narrative-driven RPG inspired by a Bicolano mythology, exploring the rivalry between Gugurang and Asuang. Designed with a focus on cultural representation, interactive storytelling, and system-based combat mechanics.",
            image: kmImg,
            role: "Game Designer & Developer",
            focus: "Narrative Systems, Combat Mechanics, & Event Design",
            link: "https://kalayo-mayon.itch.io/kalayo-mayon"
        },
        {
            title: "Echoes of Silence",
            category: "GAME DESIGN",
            description: "An atmospheric interactive experience centered around psychological tension and environmental storytelling. Designed to immerse players through sound design, pacing, and subtle narrative mechanics.",
            image: eosImg,
            role: "Game Designer & Developer",
            focus: "Gameplay Systems, Player Interaction Design, Core Mechanics Architecture",
            link: "https://nyaeko.itch.io"
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Recent <span className="gradient-text">Work</span></h2>
                    <div className="section-underline"></div>
                </div>

                <div className="projects-list">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-card-horizontal glass">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-img-horizontal" />
                                <div className="project-img-popout">
                                    <img src={project.image} alt={project.title} className="popout-image-content" />
                                    <div className="popout-hint">Hovering to preview...</div>
                                </div>
                                <div className="project-overlay-horizontal">
                                    <a
                                        href={project.link}
                                        className="btn-icon"
                                        target={project.link.startsWith('http') ? "_blank" : "_self"}
                                        rel={project.link.startsWith('http') ? "noopener noreferrer" : ""}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-details">
                                <div className="project-header-row">
                                    <span className="project-category-tag">{project.category}</span>
                                    <h3 className="project-title-horizontal">{project.title}</h3>
                                </div>
                                <p className="project-description-horizontal">{project.description}</p>
                                <div className="project-meta">
                                    <div className="meta-item">
                                        <span className="meta-label">Role:</span>
                                        <span className="meta-value">{project.role}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-label">Focus:</span>
                                        <span className="meta-value">{project.focus}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
