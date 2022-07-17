import React, { useState } from 'react';
import List from '../data';
import Cards from './Card';
import '../styles/amazon.css';

const Amazon = ({ handleClick }) => {
  //we r uplifting data to parent i.e. app.js

  // const [cart, setCart] = useState([]);
  // const handleClick = item => {
  //   // cart.push(item);
  //   // console.log(cart);
  //   setCart([...cart, item]);
  // };

  return (
    <section>
      {List.map(item => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
