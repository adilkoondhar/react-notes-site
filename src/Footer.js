import React from 'react';

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            copyright &copy; {year}
        </footer>
    );
}

export default Footer;