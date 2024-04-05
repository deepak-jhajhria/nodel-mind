"use client";
import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import ChooseUs from "./components/ChooseUs";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";
import Subscribe from "./components/Subscribe";
import Preloader from "./components/Preloader";
import { usePreloader } from "./components/Hooks";
import AOS from 'aos';
// import 'aos/dist/aos.css';
export default function Home() {
  // useEffect(() => { AOS.init({ once: true, }); }, [])
  const isLoading = usePreloader();

  return (
    <>
      {
        isLoading ? (<Preloader />) : (
          <div className="bg-white">
            <Header />
            <AboutUs />
            <ChooseUs />
            <ContactUs />
            <Faq />
            <Subscribe />
            <Footer />
            <ScrollTop />
          </div >
        )
      }
    </>
  );
}
