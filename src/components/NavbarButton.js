import React from 'react';

const NavbarButton = ({ href, text }) => {
  return (
          <a href={href} className="tracking-wide text-md capitalize relative font-semibold py-2">
            {text}
            <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
  );
}

export default NavbarButton;
