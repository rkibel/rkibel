import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = ({ bg_color, pl, pr }) => {
  const style = {
    paddingLeft: pl,
    paddingRight: pr,
  }

  return (
    <>
      <div id="hero" className={`top-0 h-screen ${bg_color}`} style={style}>
        <div className="flex justify-between pt-12">
          <div className="overflow-hidden relative w-1/2">
            <h2 className="text-3xl font-bold text-slate-600 pt-12">Hello, my name is</h2>
            <h1 className="py-6 text-8xl font-bold text-purple-900">Ron Kibel</h1>
            <p className="py-12 text-slate-600 text-lg font-medium">
              I'm a software engineer with a deep passion for applied Computer Science. I specialize in
              <span className="text-shiny-green"> Computer Vision, </span>
              <span className="text-shiny-green"> Natural Language Processing, </span>
              and  
              <span className="text-shiny-green"> Back-End Development. </span>
              Currently finishing my double BS in Computer Science and Applied Math and starting my MS in Computer Science at UC Santa Barbara.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <StaticImage
              src="../images/profile2.jpg"
              alt="profile"
              className="rounded-3xl w-3/4 border-slate-600 border-2"
            />
          </div>
        </div>
      </div>
    </>
  );  
};

export default Hero;
