import tool1 from "../../Assets/LLM.webp";
import tool2 from "../../Assets/webscrap.webp";
import tool3 from "../../Assets/TeluguTool.webp";
import tool4 from "../../Assets/TeluguOCR.webp";
import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./Tools.module.css";

const toolsData = [
  {
    name: "Rachana LLM",
    features:
      "High-quality Telugu content generation, Advanced understanding of Telugu nuances, mpowering content creators and businesses",
    description:
      "The Rachana LLM Demo Model is a groundbreaking Telugu Large Language Model designed to revolutionize content creation. It provides high-quality Telugu content generation, understanding the nuances of the language, and empowering content creators, journalists, and businesses. The model helps in creating engaging blog posts, detailed reports, and interactive educational content effortlessly.",
    link: "https://huggingface.co/spaces/Vipplav/rachana_llm",
    imageUrl:tool1, // Replace with actual image URL
    isHero: true,
  },
  {
    name: "Web Scraping Tools",
    features:
      "Extracts data from YouTube and newspaper articles, Sophisticated data collection and processing, Ethical considerations and data privacy",
    description:
      "Our Web Scraping Tools are designed to extract valuable data from YouTube and newspaper articles, enriching our data repository. These tools ensure accurate and relevant data collection while addressing ethical considerations and data privacy. They drive the development of robust AI solutions tailored for Telugu speakers by providing a comprehensive dataset for training and refining AI models.",
    link: "https://example.com/tool1",
    imageUrl: tool2,
    isHero: false,
  },
  {
    name: "Telugu Translation Tool",
    features:
      "Enhances machine translation capabilities, Generates coherent and contextually accurate Telugu translations, Applicable in automated support and language learning tools",
    description:
      "The Telugu Translation Tool leverages advanced Sequence-to-Sequence Model technology to convert English text into accurate and contextually coherent Telugu translations. Designed to handle complex sentences, this tool ensures that the essence and nuances of the original content are preserved in the translation. Ideal for applications such as automated customer support, interactive voice response systems, and language learning platforms, the Telugu Translation Tool sets new standards for AI-driven language conversion. It paves the way for more natural and effective communication, bridging the linguistic gap between English and Telugu speakers. This tool is essential for anyone looking to communicate effectively in Telugu, providing high-quality translations that are both precise and meaningful.",
    link: "https://example.com/tool2",
    imageUrl:tool3,
    isHero: false,
  },
  {
    name: "Telugu OCR Technology",
    features:
      "Digitizes printed and handwritten Telugu text, Recognizes intricate Telugu scripts, Preserves literary heritage and enhances access to information",
    description:
      "The Telugu OCR Technology is a state-of-the-art tool designed to digitize printed and handwritten Telugu text. It recognizes intricate Telugu scripts and bridges the gap between traditional and digital content. This tool is essential for digitizing old manuscripts, converting printed books into searchable digital formats, and enabling real-time text recognition for mobile applications, thus preserving the rich literary heritage of Telugu-speaking communities.",
    link: "https://huggingface.co/spaces/Vipplav/telugu_ocr",
    imageUrl:tool4,
    isHero: false,
  },
];

const Tools = () => {
  const heroTool = toolsData.find((tool) => tool.isHero);
  const otherTools = toolsData.filter((tool) => !tool.isHero);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Our Tools</h1>
      {heroTool && <HeroTool tool={heroTool} />}
      <Row className="justify-content-center">
        {otherTools.map((tool, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <ToolCard tool={tool} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const HeroTool = ({ tool }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Card className={`h-100 ${styles.heroTool} mb-5`}>
      <Card.Img variant="top" src={tool.imageUrl} alt={tool.name} />
      <Card.Body>
        <Card.Title>{tool.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {tool.features}
        </Card.Subtitle>
        <Card.Text
          className={`${styles.toolDescription} ${
            showMore ? styles.showMore : ""
          }`}
        >
          {tool.description}
        </Card.Text>
        <button className={styles.customButton} onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
        <Card.Link href={tool.link} target="_blank">
        Click here to Use.
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

const ToolCard = ({ tool }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Card className={`h-100 ${styles.toolCard}`}>
      <Card.Img variant="top" src={tool.imageUrl} alt={tool.name} />
      <Card.Body>
        <Card.Title>{tool.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {tool.features}
        </Card.Subtitle>
        <Card.Text
          className={`${styles.toolDescription} ${
            showMore ? styles.showMore : ""
          }`}
        >
          {tool.description}
        </Card.Text>
        <button className={styles.customButton} onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
        <Card.Link href={tool.link} target="_blank">
          Click here to Use.
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Tools;
