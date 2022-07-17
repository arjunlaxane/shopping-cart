import React, { useEffect, useState } from 'react';
import Amazon from './components/Amazon';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = item => {
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    console.log(cart);
    const ind = cart.indexOf(item);
    // console.log(ind);
    const arr = cart;
    // console.log(arr);
    arr[ind].amount += d;

    if (arr[ind].amount === 0) {
      arr[ind].amount = 1;
      setCart([...arr]);
    }
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />

      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
};

export default App;
