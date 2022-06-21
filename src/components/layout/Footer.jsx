import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear

    return (
        <footer class="footer-p-10 bg-gray-700 text-primary-content footer-center">
            <div>
                <h2>&copy;</h2>
                <p>Copyright &copy; {footerYear} All rights reserved</p> 
            </div>
        </footer>
    )
    }

export default Footer