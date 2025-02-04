import React from "react"

import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Hero from "../components/Hero";

// garbage pile
//import TypedText from "../components/TypedText";
//import HeroButton from "../components/HeroButton"
//import IconButton from "../components/IconButton"
// import ContactForm from "../components/ContactForm";

/*const IndexPage = () => {
  return (
    <>
        <main>
          <Navbar bg_color ="bg-transparent"/>
          <Hero bg_color ="bg-c-pal2-3" pl ="150px" pr="100px" />
          <Section c_from = "c-pal2-3" c_to = "blue-500" id = "experience" title = "Professional Experience" pl = "150px" pr = "100px" />
          <Section c_from = "c-pal2-4" c_to = "c-pal2-3" id = "projects" title = "Projects" pl = "150px" pr = "100px" />
          <Section c_from = "c-pal2-3" c_to = "c-pal2-4" id = "contact" title = "Send Me An Email!" pl = "150px" pr = "100px" />
        </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Ron Kibel</title>*/

const IndexPage = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom fixed w-full z-50 bg-blue-200">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="fixed-top z-1">
          <h1>Welcome to the Main Page</h1>
          <p>This is your main content area. Scroll down to see the sticky navbar in action.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          {/* Add more content to demonstrate scrolling */}
      </div>
    </div>
  );
};

export default IndexPage;