import React from 'react';
import Radium, { StyleRoot } from "radium";
import LeftSidebarButton from './LeftSidebarButton';
import sideBarData from '../fixtures/homepageFixture' 

const LeftSidebar = ({ width }) => {
    const styleDiv = {
        position: "fixed",
        top: "50%",
        width: width,
    }
    
    const styleUl = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    
    const styleLine = {
        display : "block",
        margin: "20px",
        width : "2.5px",
        height: "40vh",
    }
    return (
        <StyleRoot>
        <div id="sidebar" orientation="left" style = {styleDiv}>
            <ul style = {styleUl}>
            {sideBarData.map((item, index) => (
                <LeftSidebarButton
                    key={index}
                    href = {item.href}
                    label = {item.label}
                    svg_paths= {item.svg_paths}
                />
            ))}
            <li>
                <div className="bg-slate-700" style = {styleLine}></div>
            </li>
            </ul>
        </div>
        </StyleRoot>
    );
}

export default Radium(LeftSidebar);