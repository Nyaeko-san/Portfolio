import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            name: "Frontend",
            skills: ["TypeScript", "React", "JavaScript", "HTML5/CSS3", "Vite"]
        },
        {
            name: "Game Development",
            skills: ["Event Scripting", "System Design", "Gameplay Mechanics Design", "Narrative Systems"]
        },
        {
            name: "Tools",
            skills: ["RPG Maker Series", "Unity", "C#", "Godot", "Unreal Engine"]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                    <div className="section-underline"></div>
                </div>

                <div className="skills-columns">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="skill-column-glass">
                            <div className="skill-column-header">
                                <h3>{cat.name}</h3>
                                <div className="header-divider"></div>
                            </div>
                            <div className="skill-vertical-list">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-vertical-item">
                                        <span className="skill-dot"></span>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
