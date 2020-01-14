import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss'

import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';


const CarouselItem = ({mylist, id, cover, title, year,contentRating, duration, setFavorite, deleteFavorite, isList}) => {
  
  const handleSetFavorite = () => {

    const exist = mylist.find(item => item.id == id)
        if(exist){
            alert("Ya tienes agregado a favorito");  
        }else{
            setFavorite({
                id,
                cover, 
                title, 
                year, 
                contentRating, 
                duration
            })
        }
  }

  const handleDeleteFavorite = (itemId) => {
      deleteFavorite(itemId)
    }

  return (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}>
              <img className="carousel-item__details--img" src={play} alt="Play Icon" /> 
            </Link>
            { isList 
              ? 
              <img 
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Plus Icon"
                onClick={() => handleDeleteFavorite(id)}
              />
              :
              <img onClick={handleSetFavorite} className="carousel-item__details--img" src={plus} alt="Plus Icon" />
            }
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
  );
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,

};

const mapStateToProps = ({mylist}) => {
    return {
        mylist
    }
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);