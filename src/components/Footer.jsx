import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Oscar Quintanilla</strong> &copy; {new Date().getFullYear()}
                </p>
                <div className="footer-links">
                    <a href="https://github.com/OscarQ5" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span> | </span>
                    <a href="https://linkedin.com/in/oscarquintanilla5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer