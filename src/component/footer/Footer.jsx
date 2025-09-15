import React from "react";

function Footer() {
    return (
        <footer style={{
            background: "#eee",
            padding: "1rem",
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "100%",
            boxShadow: "0 -2px 5px rgba(0,0,0,0.1)"
        }}>
            © 2025 EMS PROJECT. All rights reserved.
        </footer>
    );
}

export default Footer;