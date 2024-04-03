"use client";
import Link from "next/link"
import { Logo } from "./Icons"
import { useOverflowHidden } from "./Hooks";
import { Twirl as Hamburger } from 'hamburger-react';
import { CommonBtn } from "./Reuse";
const Navbar = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);
  return (
    <nav className="absolute top-0 left-0 w-full">
      <div className="container flex items-center justify-between py-3 md:py-4 lg:py-5">
        <Link href={"/"}><span><Logo /></span></Link>
        <ul className={`${isOpen ? "right-0" : "-right-full"} flex items-center gap-6 mobileview`}>
          <li><Link className="links" href={"/home"} onClick={() => setOpen(false)}>home</Link></li>
          <li><Link className="links" href={"/home"} onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link className="links" href={"/home"} onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link className="links" href={"/home"} onClick={() => setOpen(false)}>Why Choose Us</Link></li>
          <li><Link className="links" href={"/home"} onClick={() => setOpen(false)}>Blogs</Link></li>
          <li><Link className="links" href={"/home"} onClick={() => setOpen(false)}>FAQ</Link></li>
          <li><CommonBtn cstm="ml-4" name="Contact Us" /></li>
        </ul>
        <div className='relative z-[110] mx-2 sm:mx-3 lg:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction='right' duration={0.5} color='#9A5DEC' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
