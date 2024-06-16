import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ScreenshotsCarousel = ({ screenshots }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {screenshots.map((screenshot, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={screenshot.image}
            alt={`Screenshot ${idx + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ScreenshotsCarousel;