import React,{useEffect} from 'react';
import Layout from '../components/layout/Layout'
import Cvs from '../components/ui/cvs/cvs'

export default function Home() {
  
  useEffect(()=> {
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");
    var navcontent = document.getElementById("nav-content");
    var navaction = document.getElementById("navAction");
    var brandname = document.getElementById("brandname");
    var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {
  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    
    navcontent.classList.remove("text-white");
    navcontent.classList.add("bg-black");
    navcontent.classList.add("text-black");
  } else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }
    navcontent.classList.add("text-white");
    navcontent.classList.remove("text-black");
    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
  }
});
  }, [])

  return (
    <div className="leading-normal tracking-normal gradient text-white fontAppear">
      <Layout>
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <Cvs />
          </div>
        </div>
      </Layout>
    </div>
  )
}
