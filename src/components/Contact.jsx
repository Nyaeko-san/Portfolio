import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="section-underline"></div>
                </div>

                <div className="contact-container glass">
                    <div className="contact-info">
                        <h3>Let's collaborate</h3>
                        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <div className="contact-links">
                            <div className="contact-item">
                                <div className="contact-link">
                                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    Email
                                </div>
                                <div className="contact-popup">
                                    <span className="popup-label">Direct Email:</span>
                                    <span className="popup-value">delossantostintine47@gmail.com</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-link">
                                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                    Socials
                                </div>
                                <div className="contact-popup">
                                    <span className="popup-label">Facebook / Insta:</span>
                                    <span className="popup-value">@tintine47</span>
                                    <span className="popup-value">@nyaenyaenyae</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-link">
                                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 12L3.269 9.269A2 2 0 013 7.854V4a2 2 0 012-2h14a2 2 0 012 2v3.854a2 2 0 01-.269 1.415L18 12M6 12l2.731 2.731a2 2 0 00.269 1.415V20a2 2 0 002 2h2a2 2 0 002-2v-3.854a2 2 0 00.269-1.415L18 12M6 12h12" /></svg>
                                    Itch
                                </div>
                                <div className="contact-popup">
                                    <span className="popup-label">Itch.io:</span>
                                    <span className="popup-value">nyaeko.itch.io</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-link">
                                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                    GitHub
                                </div>
                                <div className="contact-popup">
                                    <span className="popup-label">GitHub:</span>
                                    <span className="popup-value">NyaNyaNya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
