import React from "react";
import "./Home.css";
import Timeline from "../Timeline/Timeline";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/img1 (1).webp";
import img2 from "../../Assets/img1 (2).webp";
import img3 from "../../Assets/img1 (6).webp";
import img4 from "../../Assets/img1 (9).webp";
const Home = () => {
  return (
    <div>
      <div className="carousel">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 custom-height"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-height"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-height"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-height"
              src={img4}
              alt="Fourth slide"
            />
            <Carousel.Caption />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <section className="our-mission">
        <div className="image-grid">
          <img
            src={mission1}
            alt="Close-up of hands using a smartphone"
            className="image-large"
          />
          <div className="small-images">
            <img
              src={mission2}
              alt="Team of professionals"
              className="image-small-first"
            />
            <img
              src={mission3}
              alt="Person stacking wooden blocks"
              className="image-small-second"
            />
          </div>
        </div>

      </section> */}

      {/* Importing of Timeline */}
      <div className="mission-content">
          <h2 className="text-center">Our Mission</h2>
          <p>
            Welcome to Vipplav AI, where our mission transcends the ordinary and
            ventures into the extraordinary. In a world where technology is
            evolving at lightning speed, we stand at the forefront, driven by a
            singular, powerful vision: to democratize artificial intelligence
            for the Indian masses, starting with the rich and vibrant Telugu
            language.
          </p>
          <p>
            Imagine a world where every individual, regardless of the language
            they speak, can harness the transformative power of AI. A world
            where technology bridges gaps, breaks down barriers, and uplifts
            communities. This is the world we envision at Vipplav AI. Our
            mission is to turn this visionary dream into a tangible reality,
            ensuring that AI is not just a tool for the privileged few but a
            beacon of empowerment for all.
          </p>
          <div className="highlight-box">
            <p>
              The future of AI is not a distant dream; it is being shaped today.
              At Vipplav AI, we are not just passive observers of this
              transformation; we are active architects. Our mission drives us to
              continuously push the boundaries of what is possible, to explore
              uncharted territories, and to bring forth solutions that are both
              revolutionary and accessible.
            </p>
          </div>
        </div>
      <Timeline />
    </div>
  );
};

export default Home;
