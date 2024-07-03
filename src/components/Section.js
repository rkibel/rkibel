import React from 'react';
import WorkCardList from './WorkCardList';
import ContactForm from './ContactForm';
import Projects from './Projects';

const Section = ({ id, c_from, c_to, title, pl, pr }) => {
  const grad_from = `from-${c_from}`;
  const grad_to = `to-${c_to}`;
  const bg = `bg-${c_to}`;
  const setPadding = {
    paddingLeft: pl,
    paddingRight: pr,
  };

  return (
    <>
      <div className={`h-28 bg-gradient-to-b ${grad_from} ${grad_to}`} id={id}></div>
      <div className={`${bg}`} style={setPadding}>
        <h1 className="text-4xl font-bold text-slate-600 text-center">{title}</h1>
        {id === "experience" && <WorkCardList/>}
        {id === "projects" && <Projects/>}
        {id === "contact" && <ContactForm/>}
      </div>
    </>
  );
};

export default Section;
