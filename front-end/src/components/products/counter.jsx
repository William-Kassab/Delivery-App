import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ id }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => {
          if ((count - 1) < 0) setCount(0);
          else {
            setCount(Number(count - 1));
          }
        } }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ count }
        onChange={ ({ target: { value } }) => {
          setCount(Number(value));
        } }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => {
          setCount(Number(count + 1));
        } }
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Counter;
