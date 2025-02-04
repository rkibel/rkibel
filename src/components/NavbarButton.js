import React from 'react';
import { Link } from 'react-scroll';

const NavbarButton = ({ text, id }) => {
  return (
    <Link
      to={id}
      smooth={'easeInOutQuart'}
      duration={50}
      aria-label={`Scroll to ${id} section`}
      className="text-slate-900 tracking-wide font-bold text-sm tracking-widest capitalize relative font-semibold py-2 cursor-pointer"
    >
      {text}
      <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default NavbarButton;
