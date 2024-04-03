import AboutUs from "./components/AboutUs";
import ChooseUs from "./components/ChooseUs";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <AboutUs />
      <ChooseUs />
      <ContactUs />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}
