import React from "react"

const HeroButton = ({ text, fileOnDownload }) => {
    const handleClick = () => {
        const link = document.createElement('a');
        link.href = fileOnDownload;
        link.download = fileOnDownload.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className= "text-sm px-10 py-4 uppercase tracking-widest bg-white shadow-lg text-slate-600 rounded-xl font-semibold hover:text-white hover:bg-shiny-green hover:-translate-y-2 transition-all ease-in-out duration-300 transform active:translate-y-5" onClick={handleClick}>
            {text}
        </button>
    );
};

export default HeroButton;
