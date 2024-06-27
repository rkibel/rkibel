import React from "react"
import Typical from 'react-typical';
import { StaticImage } from 'gatsby-plugin-image';

import LeftSideBar from "../components/LeftSidebar"
import HeroButton from "../components/HeroButton"
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

const sidebarWidth = "200px";
const navbarHeight = "100px";

const style = {
  shiftRight: {
    marginLeft: sidebarWidth,
  },
  hero : {
    paddingTop: navbarHeight,
    justifyContent: "space-between",
  },

}

const mergedStyles = { ...style.hero, ...style.shiftRight};

const IndexPage = () => {
  return (
    <body>
      <LeftSideBar width = {sidebarWidth}/>
      <NavBar height = {navbarHeight}/>
      <main>
        <div id="hero" className="min-h-screen bg-gradient-to-b from-grad-upper to-grad-lower">
          <div className="flex pr-32" style={mergedStyles}>
            <div className="overflow-hidden relative mt-24" style={{minWidth: "500px"}}>
              <h2 className="text-3xl font-bold text-slate-600">Hello, my name is</h2>
              <h1 className="py-8 text-8xl font-bold text-purple-900">Ron Kibel</h1>

              <div className="py-8 flex space-x-3 items-center">
                <p className="text-slate-600 text-xl font-bold"> I specialize in</p>
                <Typical className="text-shiny-green text-2xl font-bold font-mono" steps={["", 2500, "Computer Vision.", 2500, "", 1000, "Natural Language Processing.", 2500, "", 1000, "Back-End Development.", 2500, "", 1000]} loop={Infinity}/>
              </div>
              
              <div className="py-8 flex space-x-12">
                <HeroButton text = "Resume" fileOnDownload="/page-data/index/Ron_Kibel_Resume.pdf"/>
                <HeroButton text = "Contact"/>
              </div>
            </div>

            <StaticImage
              src="../images/profile2.jpg"
              alt="profile"
              className="rounded-3xl w-1/3 h-3/4 border-black border-2 mt-14"
            />
          </div>
        </div>

        <div className="bg-grad-lower">
          <div style={style.shiftRight} id="contact">
          <h2 className="py-2 text-3xl font-bold text-slate-600">Send Me An Email</h2>
            <ContactForm/>
          </div>
        </div>
      </main>
    </body>
  )
}

export default IndexPage

export const Head = () => <title>Ron Kibel</title>


