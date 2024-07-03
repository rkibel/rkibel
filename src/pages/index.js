import React from "react"

import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Section from "../components/Section";
import Hero from "../components/Hero";

// garbage pile
//import TypedText from "../components/TypedText";
//import HeroButton from "../components/HeroButton"
//import IconButton from "../components/IconButton"


const sidebarWidth = "150px";

const style = {
  shiftRight: {
    paddingLeft: sidebarWidth,
  },
}

const IndexPage = () => {
  return (
    <>
        <Navbar height = "105px"/>
        <main>
          <Hero 
            bg_color ="bg-c-pal2-3" 
            pl ="150px" 
            pr="100px"
          />
          <Section 
            c_from = "c-pal2-3"
            c_to = "c-pal2-4"
            id = "experience"
            title = "Professional Experience"
            pl = "150px"
            pr = "100px"
          />
          <Section 
            c_from = "c-pal2-4"
            c_to = "c-pal2-3"
            id = "projects"
            title = "Projects"
            pl = "150px"
            pr = "100px"
          />
          <Section 
            c_from = "c-pal2-3"
            c_to = "c-pal2-4"
            id = "contact"
            title = "Send Me An Email!"
            pl = "150px"
            pr = "100px"
          />
        </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Ron Kibel</title>