import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./Tools.module.css";
import toolsData from "./toolsData";

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const heroTool = toolsData.find((tool) => tool.isHero);
  const otherTools = toolsData.filter((tool) => !tool.isHero);

  const handleButtonClick = (link) => {
    if (link === "telugu_ocr") {
      setSelectedTool("telugu_ocr");
    }
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Our Tools</h1>
      {heroTool && <HeroTool tool={heroTool} onButtonClick={handleButtonClick} />}
      <Row className="justify-content-center">
        {otherTools.map((tool, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <ToolCard tool={tool} onButtonClick={handleButtonClick} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const HeroTool = ({ tool, onButtonClick }) => {
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
        <Card.Text className={`${styles.toolDescription} ${showMore ? styles.showMore : ""} ${styles.paddingRight}`}>
          {tool.description}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <button className={styles.customButton} onClick={toggleShowMore}>
            {showMore ? "Show less" : "Show more"}
          </button>
          <button className={styles.customButton} onClick={() => onButtonClick(tool.link)}>
            Click here to Use
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

const ToolCard = ({ tool, onButtonClick }) => {
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
        <Card.Text className={`${styles.toolDescription} ${showMore ? styles.showMore : ""} ${styles.paddingRight}`}>
          {tool.description}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <button className={styles.customButton} onClick={toggleShowMore}>
            {showMore ? "Show less" : "Show more"}
          </button>
          <button className={styles.customButton} onClick={() => onButtonClick(tool.link)}>
            Click here to Use
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Tools;
