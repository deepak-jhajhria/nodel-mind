"use client";
import Link from "next/link"
import { Logo } from "./Icons"
import { useOverflowHidden } from "./Hooks";
import { Twirl as Hamburger } from 'hamburger-react';
import { CommonBtn } from "./Reuse";
import { useEffect } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);
  useEffect(() => {
    window.onscroll = function () { scrollFunction(); progressBarScroll(); };
  }, []);
  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("nav").classList.add("!fixed")
      document.getElementById("nav").classList.add("!z-40")
    }
    else {
      document.getElementById("nav").classList.remove("!fixed")
      document.getElementById("nav").classList.remove("!z-40")

    }
  }
  return (
    <nav id="nav" className="absolute top-0 left-0 w-full duration-300 bg-white">
      <div className="container flex items-center justify-between py-3 md:py-4 lg:py-5">
        <Link href={"/"}><span><Logo /></span></Link>
        <ul className={`${isOpen ? "right-0" : "-right-full"} flex items-center gap-6 mobileview`}>
          <li><Link className="links" href={"#home"} onClick={() => setOpen(false)}>home</Link></li>
          <li><Link className="links" href={"#aboutUs"} onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link className="links" href={"/services"} onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link className="links" href={"#whyChooseUs"} onClick={() => setOpen(false)}>Why Choose Us</Link></li>
          <li><Link className="links" href={"#blogs"} onClick={() => setOpen(false)}>Blogs</Link></li>
          <li><Link className="links" href={"#faq"} onClick={() => setOpen(false)}>FAQ</Link></li>
          <li><CommonBtn cstm="ml-4" name="Contact Us" /></li>
        </ul>
        <div className='relative z-[110] mx-2 sm:mx-3 lg:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction='right' duration={0.5} color='#9A5DEC' />
        </div>
      </div>
      <div id='scroll' className="fixed top-[67px] md:top-[76px] lg:top-[83px] w-full z-10">
        <div className="h-[6px]  sm:h-2 w-full">
          <div className=" bg-[#8F61E7] rounded-r-full h-[5px] sm:h-[7px] w-0" id="progressBar"></div>
        </div>
      </div>
      {isOpen && (
        <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-[30]'>
        </div>
      )}
    </nav>
  )
}

export default Navbar
