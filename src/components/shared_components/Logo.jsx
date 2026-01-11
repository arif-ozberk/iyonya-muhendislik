import React from 'react';

// React-Router
import { Link } from 'react-router';

// Assets
import logoImage from "../../assets/iyonya-muhendislik-logo-beyaz.png";


const Logo = ({ logoWidth, logoHeight }) => {
    return (
        <Link to="/">
            <img
                src={logoImage}
                alt="iyonya-muhendislik-logo"
                style={{ width: logoWidth, height: logoHeight, display: "flex", alignItems: "center" }}
            />
        </Link>
    );
}

export default Logo;