import Image from "next/image";
import axios from "axios";
import Nav from "./components/custom/nav/page";
import LandingSlider from "./components/custom/landing/landignSlider";
import Slider from "./components/custom/imageSlider/slider";
import Footer from "./components/custom/footer/page";


export default function Home() {
  return (
    <div className="relative bg-[#000000]">
        <Nav />
        <LandingSlider />
      <Slider title={'trending'} name={"Trending Movies"} />
      <Slider title={'ttvshows'} name={"Trending TV Shows"} />
      <Slider title={'t_rated'} name={"Top Rated"} />
      <Slider title={'air_tday'} name={"Airing Today"} />
      <Footer />
    </div>
  );
}
