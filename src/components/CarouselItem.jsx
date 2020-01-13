import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss'

import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';


const CarouselItem = ({cover, title, year,contentRating, duration}) => (
    <div class="carousel-item">
        <img class="carousel-item__img" src={cover} alt={title}  />
        <div class="carousel-item__details">
          <div>
            <img class="carousel-item__details--img" src={play} alt="Play Icon" /> 
            <img class="carousel-item__details--img" src={plus} alt="Plus Icon" />> 
          </div>
          <p class="carousel-item__details--title">{title}</p>
          <p class="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>

);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,

};

export default CarouselItem;