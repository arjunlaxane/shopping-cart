import React from 'react';
import '../styles/card.css';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt={title} />

        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>{price}</p>

          <button className="card-click" onClick={() => handleClick(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
