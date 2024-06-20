import React from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem';
import startLogo from '../../Assets/2.png';

const Timeline = () => {
  const events = [
    { id: 1, title: 'Rachana LLM Demo Model', phase: 'Focus Phase', description: 'Developed and launched the Rachana LLM Demo model, our flagship Telugu Large Language Model, designed to generate high-quality Telugu content.', color: '#e57373' },
    { id: 2, title: 'Web Scraping Initiatives', phase: 'Objectives Phase', description: 'Initiated web scraping projects focused on extracting data from YouTube and newspaper articles to enhance our data repository.', color: '#64b5f6' },
    { id: 3, title: 'Telugu OCR Development', phase: 'Achievements Phase', description: 'Developed an Optical Character Recognition (OCR) tool specifically for the Telugu language to digitize printed and handwritten text.', color: '#81c784' },
    { id: 4, title: 'Tool Pipeline Creation', phase: 'Advancement Phase', description: 'Created a robust pipeline for tools to process both articles and YouTube content using MongoDB, ensuring efficient data handling and retrieval.', color: '#ffb74d' },
    { id: 5, title: 'Phonetic Guide Creation', phase: 'Direction Phase', description: 'Developed a comprehensive phonetic guide to aid in the accurate pronunciation and understanding of Telugu phonetics.', color: '#e57373' },
    { id: 6, title: 'Sequence-to-Sequence Model', phase: 'Aims Phase', description: 'Created a sequence-to-sequence model to enhance our machine translation and language generation capabilities.', color: '#64b5f6' }
  ];

  return (
    <div className="timeline">
      <h2 className="timeline-title">
        <img src={startLogo} alt='startLogo' className='startLogo' />
      </h2>
      <div className="timeLineItems">
        {events.map((event, index) => (
          <TimelineItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
