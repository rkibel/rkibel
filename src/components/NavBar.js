import React from 'react';
import NavbarButton from './NavbarButton';
import iconData from '../fixtures/icons';
import IconButton from './IconButton';

const Navbar = ({ height }) => {
	const style = {
		paddingLeft: "100px",
        paddingRight: "50px",
        height: height,
	};

	const scrollToTop = (event) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<nav className={`sticky top-0 left-0 w-full bg-grad-lower bg-opacity-90 flex justify-between items-center z-50 border-b-2 border-slate-300 text-slate-600`} style={style}>
			<div>
				<a href="#" onClick={scrollToTop}>
					<svg width="70px" height="70px" viewBox="0 0 300 300" className={`transition-colors ease-in hover:text-shiny-green stroke-0.5 fill-current`}>
						<g transform="matrix(6.053268597399125,0,0,6.053268597399125,0,0)">
							<circle xmlns="http://www.w3.org/2000/svg" cx="44.61" cy="24.77" r=".67"></circle>
							<circle xmlns="http://www.w3.org/2000/svg" cx="24.77" cy="4.93" r=".67"></circle>
							<circle xmlns="http://www.w3.org/2000/svg" cx="4.93" cy="24.77" r=".67"></circle>
							<circle xmlns="http://www.w3.org/2000/svg" cx="24.77" cy="44.61" r=".67"></circle>
							<path xmlns="http://www.w3.org/2000/svg" d="M24.77 49.53L0 24.76 24.77 0l24.79 24.77zM.86 24.77l23.91 23.91 23.91-23.91L24.77.86z"></path>
						</g>
						<g transform="matrix(11.467890811281617,0,0,11.467890811281617,38.53210918871838,0.19265513231030695)" className="fill-current">
							<path d="M4 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M14.440000000000001 10 l3 0 l0 1 c0 1.52 -0.52 2.98 -1.64 4.02 l2.64 4.98 l-3.7 0 l-3.1 -5.92 l0 5.92 l-3 0 l0 -14 l3 0 l0 7.54 l0.46 0 c1.62 0 2.34 -1.08 2.34 -2.56 l0 -0.98 z"></path>
						</g>
					</svg>
				</a>
			</div>

			<ul className={"flex space-x-9 items-center"}>
				<li className={`group`}><NavbarButton href="#experience" text="Experience" /></li>
				<li className={`group`}><NavbarButton href="#projects" text="Projects" /></li>
				<li className={`group pr-20`}><NavbarButton href="#contact" text="Contact" /></li>
				<li className='flex'>
					{iconData.map((item, index) => (
						<IconButton
							key={index}
							href={item.href}
							label={item.label}
							size={28}
							svg_paths={item.svg_paths}
						/>
					))}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
