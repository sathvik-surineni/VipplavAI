import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Container, Row, Col } from 'react-bootstrap';
import imgFounder from "../../Assets/vineel.jpeg";
import imgFounder2 from "../../Assets/pranay.png";
import img1 from "../../Assets/img1 (1).webp";
import img2 from "../../Assets/img1 (2).webp";
import img3 from "../../Assets/img1 (6).webp";
import img4 from "../../Assets/img1 (9).webp";
import "./AboutUs.css";

const teamMembers = [
    {
      name: 'Vineel Vaddi',
      role: 'CPO',
      imageUrl:imgFounder,
    },
    {
      name: 'Pranay Palle',
      role: 'CTO',
      imageUrl:imgFounder2 ,
    },
    {
      name: 'Prashanth',
      role: 'CFO',
      imageUrl: 'https://source.unsplash.com/random/100x100?man',
    },
  ];

const AboutUs = () => {
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
      <h1 className="about-us-heading p-4">About Us</h1>
      <section className="introduction">
        <p>
          In a world where artificial intelligence (AI) is becoming increasingly
          prevalent, its impact is impossible to ignore. Vipplav AI is dedicated
          to democratizing AI technology for the Indian masses, making it
          accessible and functional in their native languages, starting with
          Telugu. Our mission is to ensure that the transformative power of AI
          reaches everyone, regardless of the language they speak.
        </p>
        <p>
          At Vipplav AI, we recognize the unique linguistic diversity of India,
          where over 1,652 languages and dialects are spoken. This rich tapestry
          of languages is a testament to our cultural heritage, but it also
          poses significant challenges in the digital age. Most AI tools are
          designed with English-speaking users in mind, leaving a vast majority
          of the population at a disadvantage. We aim to bridge this gap by
          creating AI solutions that are tailored to the specific needs of
          non-English speakers.
        </p>
        <p>
          Our flagship product, Rachana LLM, is a testament to our commitment.
          It is a Telugu Large Language Model developed from scratch to
          understand and generate high-quality Telugu content. This tool
          empowers content creators, journalists, and businesses to produce
          exceptional Telugu content effortlessly, fostering greater inclusivity
          in the AI landscape.
        </p>
      </section>
      <section className="ourteam">
        <Container className="my-5">
      <h1 className="text-center mb-5">Our Team</h1>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={member.imageUrl}
                alt={member.name}
                className="rounded-circle mx-auto mt-4"
                style={{ width: '200px', height: '200px' }}
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

      </section>
    </div>
  );
};

export default AboutUs;
