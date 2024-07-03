import React from "react"

const buttonStyleLi = {
}

const IconButton = ({ href, label, svg_paths, size }) => {
    
    return (
        <div className="list-none p-2.5" style = {buttonStyleLi}>
            <a href={href} aria-label = {label} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-slate-700 transition-colors ease-in hover:stroke-shiny-green stroke-1.5" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke = "none" d="M0 0h24v24H0z"></path>
                {svg_paths.map((d, index) => (
                    <path key = {index} d={d}></path>
                ))}
                </svg>
            </a>
        </div>
    );
};
  
export default IconButton;