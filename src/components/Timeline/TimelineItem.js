import React, { useRef, useEffect } from 'react';
import './TimelineItem.css';

const TimelineItem = ({ event }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className={`timeline-item ${event.id % 2 === 0 ? 'left' : 'right'}`}>
      <div className="timeline-content" style={{ borderColor: event.color }}>
        <h4 className="timeline-phase">{event.phase}</h4>
        <h3 className="timeline-title">{event.title}</h3>
        <p className="timeline-description">{event.description}</p>
        <div className="timeline-circle" style={{ backgroundColor: event.color }}>{event.id}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
