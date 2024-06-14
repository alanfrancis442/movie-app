import Image from "next/image";
import axios from "axios";
import Nav from "./components/custom/nav/page";
import LandingSlider from "./components/custom/landing/landignSlider";
import Slider from "./components/custom/imageSlider/slider";
import Footer from "./components/custom/footer/page";


export default function Home() {
  return (
    <div className="relative">
      <div className="absolute w-full">
        <Nav />
      </div>
      <div className="relative">
        <LandingSlider />
        <div className='text-white absolute z-10 bottom-0 h-[15vh] w-full
         bg-gradient-to-t from-[rgba(59,59,59,0.5)] top-[rgba(0,0,0,0.1)]'></div>
      </div>
      <Slider title={'trending'} name={"Trending Movies"} />
      <Slider title={'trending'} name={"marvel's"} />
      <Slider title={'trending'} name={"marvel's"} />
      <Footer />
    </div>
  );
}
