import React from 'react';
import './Slider.scss';

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
function Slider() {
  const slideImages = [
    {
      id: 0,
      link: 'https://buroharro.nl/wp-content/uploads/2021/05/Buroharro_kantoor_8-low-1349x1800.jpg',
    },
    {
      id: 1,
      link: 'https://buroharro.nl/wp-content/uploads/2021/05/Buroharro_kantoor_1-low.jpg',
    },
    {
      id: 2,
      link: 'https://buroharro.nl/wp-content/uploads/2021/05/Buroharro_kantoor_4-low-1349x1800.jpg',
    },
    {
      id: 3,
      link: 'https://buroharro.nl/wp-content/uploads/2021/05/Buroharro_kantoor_3-low-2000x1499.jpg',
    },

    {
      id: 4,
      link: 'https://buroharro.nl/wp-content/uploads/2021/05/Buroharro_kantoor_70low.jpg',
    },
  ];

  return (
    <section className="slider">
      <div className="slide-container">
        <Zoom scale={0.4}>
          {slideImages.map((each, index) => (
            <div key={each.id} className="slider__image">
              <img
                alt={`slider-${each.id}}`}
                key={index}
                style={{ width: '100%' }}
                src={each.link}
              />
            </div>
          ))}
        </Zoom>
      </div>
    </section>
  );
}

export default Slider;
