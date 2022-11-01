import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import carImg from "./carImg.jpg";


function CarSlides(props) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={4000}
      
    >
      <div data-src={carImg} />
      <div data-src={carImg} />
      <div data-src={carImg} />
    </AutoplaySlider>
  );
}

export default CarSlides;
