import React from 'react';
import Radium, { StyleRoot } from "radium";
//import NavBarButton from './NavBarButton';

const NavBar = ({ height }) => {
    const styleDiv = {
        position: "fixed",
        height: height,
        top: 0,
        width: "100%",
    }

    return (
        <StyleRoot>
        <div style = {styleDiv}>
        <a href="/">
            <svg width="80px" height="80px" viewBox="0 0 300 300">
                <g transform="matrix(6.053268597399125,0,0,6.053268597399125,0,0)" fill="#213c45">
                    <circle xmlns="http://www.w3.org/2000/svg" cx="44.61" cy="24.77" r=".67"></circle>
                    <circle xmlns="http://www.w3.org/2000/svg" cx="24.77" cy="4.93" r=".67"></circle>
                    <circle xmlns="http://www.w3.org/2000/svg" cx="4.93" cy="24.77" r=".67"></circle>
                    <circle xmlns="http://www.w3.org/2000/svg" cx="24.77" cy="44.61" r=".67"></circle>
                    <path xmlns="http://www.w3.org/2000/svg" d="M24.77 49.53L0 24.76 24.77 0l24.79 24.77zM.86 24.77l23.91 23.91 23.91-23.91L24.77.86z"></path>
                </g>
                <g transform="matrix(11.467890811281617,0,0,11.467890811281617,38.53210918871838,0.19265513231030695)" fill="#213c45">
                    <path d="M4 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M14.440000000000001 10 l3 0 l0 1 c0 1.52 -0.52 2.98 -1.64 4.02 l2.64 4.98 l-3.7 0 l-3.1 -5.92 l0 5.92 l-3 0 l0 -14 l3 0 l0 7.54 l0.46 0 c1.62 0 2.34 -1.08 2.34 -2.56 l0 -0.98 z"></path>
                </g>
            </svg>
        </a>
        
        </div>
        </StyleRoot>
    );
}

export default Radium(NavBar);