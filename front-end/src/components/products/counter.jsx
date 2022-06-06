import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../../context/MyContext';

const Counter = ({ id, name, price }) => {
  const [count, setCount] = useState({
    id,
    name,
    price,
    quantity: 0,
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart'));
    if (products && products.length > 0) {
      const find = products.find((product) => product.id === id);
      if (find) {
        setCount(find);
      }
    }
  }, []);

  const { cart, setCart } = useContext(MyContext);

  function addCart(objCount) {
    const cartClone = cart.filter((ele) => ele.id !== count.id);
    if (count.quantity > 0) {
      setCart([
        ...cartClone,
        objCount,
      ]);
    } else {
      setCart([
        ...cartClone,
      ]);
    }
  }

  useEffect(() => {
    addCart(count);
  }, [count]);

  function handleClickRemove() {
    setCount({
      ...count,
      quantity: count.quantity - 1 < 0 ? 0 : count.quantity - 1,
    });
  }

  function handleClickAdd() {
    setCount({
      ...count,
      quantity: Number(count.quantity) + 1,
    });
  }

  function handleChange({ target }) {
    const { value } = target;
    setCount({
      ...count,
      quantity: value < 0 ? 0 : value,
    });
  }

  return (
    <div className="counterContainer">
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ handleClickRemove }
      >
        -
      </button>
      <input
        type="number"
        className="countInput"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ count.quantity }
        min="0"
        onChange={ handleChange }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ handleClickAdd }
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Counter;
