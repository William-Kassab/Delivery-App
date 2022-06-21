import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';
import Button from './button';
import './indexStyle.css';

const Products = ({ products }) => (
  <main className="products-container">
    {products.map(({ id, price, name, url_image: url }, index) => (
      <div key={ index } className="card-container">
        <div className="product-card">
          <p
            data-testid={ `customer_products__element-card-price-${id}` }
            className="productPrice"
          >
            {`R$ ${price.replace(/\./, ',')}`}
          </p>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ url }
            alt={ name }
            width="50"
          />
        </div>
        <div className="productName">
          <p
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </p>
          <Counter id={ id } name={ name } price={ price } />
        </div>
      </div>
    ))}
    <Button />
  </main>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  })),
};

Products.defaultProps = {
  products: [],
};

export default Products;
