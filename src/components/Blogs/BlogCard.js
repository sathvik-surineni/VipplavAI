import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './BlogPage.css'; // Import the CSS file

const BlogCard = ({ blog, index }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="my-3 card" style={{ animationDelay: `${index * 0.1}s` }}>
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle> {/* Added author */}
        <Card.Text>
          {showMore ? blog.description : `${blog.description.substring(0, 100)}...`}
        </Card.Text>
        <Button variant="primary" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Read More'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
