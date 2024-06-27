import React from "react"
import Radium from "radium";

const NavBarButton = ({ text, href }) => {
    return (
        <a className="navBarButton" href = {href}>{text}</a>
    );
};

export default Radium(NavBarButton);
