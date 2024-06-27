import React from "react"
import Radium from "radium";

const styling = {
    letterSpacing: "2px",
    backgroundColor: "#fff",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease 0s",
    ":hover" : {
        backgroundColor: "#23c483",
        boxShadow: "0px 15px 20px rgba(46, 229, 157, 0.4)",
        transform: "translateY(-5px)",
    },
    ":active" : {
        transform: "translateY(-2px)"
    }
}

const HeroButton = ({ text, fileOnDownload }) => {
    const handleClick = () => {
        const link = document.createElement('a');
        if (text.toUpperCase() === "CONTACT") {
            link.href = "#contact";
        }
        else if (fileOnDownload) {
            link.href = fileOnDownload;
            link.download = fileOnDownload.split('/').pop();
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className= "text-slate-600 rounded-xl font-semibold hover:text-white text-sm px-10 py-4 uppercase" style={styling} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Radium(HeroButton);
