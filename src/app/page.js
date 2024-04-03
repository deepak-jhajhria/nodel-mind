import AboutUs from "./components/AboutUs";
import ChooseUs from "./components/ChooseUs";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <AboutUs />
      <ChooseUs />
    </div>
  );
}
