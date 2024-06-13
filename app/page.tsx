import Image from "next/image";
import axios from "axios";
import LandingSlider from "./components/custom/landing/landignSlider";
import Slider from "./components/custom/imageSlider/slider";

//http://www.omdbapi.com/?s=Batman&page=2
const api_url = "http://www.omdbapi.com/?apikey="

export default function Home() {
  return (
    <>
    yoo
      {/* <LandingSlider /> */}
        <Slider name={"marvel's"} />
        <Slider name={"marvel's"} />
        <Slider name={"marvel's"} />
    </>
  );
}
