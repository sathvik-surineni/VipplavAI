import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import BlogCard from './BlogCard';
import sampleData from './sampleData';
import './BlogPage.css'; // Import the CSS file

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = sampleData.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }, [filteredData]);

  return (
    <Container>
      <h1 className='text-center p-4'>Blogs</h1>
      <div className="search-bar">
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <Row>
        {filteredData.map((blog, index) => (
          <Col md={4} key={index}>
            <BlogCard blog={blog} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;
