import React from 'react';
import LeftSidebarButton from './LeftSidebarButton';
import sideBarData from '../fixtures/homepageFixture' 

const LeftSidebar = ({ width }) => {
    const styleDiv = {
        width: width,
    }
    return (
        <div id="sidebar" orientation="left" className="fixed inset-y-2/4 h-full" style = {styleDiv}>
            <ul className="flex flex-col items-center h-full">
            {sideBarData.map((item, index) => (
                <LeftSidebarButton
                    key={index}
                    href = {item.href}
                    label = {item.label}
                    svg_paths= {item.svg_paths}
                />
            ))}
            <li className="h-1/2">
                <div className="bg-slate-600 block my-5 w-1 h-full"></div>
            </li>
            </ul>
        </div>
    );
}

export default LeftSidebar;