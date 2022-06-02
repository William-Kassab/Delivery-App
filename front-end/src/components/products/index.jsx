import React from 'react';
import PropTypes from 'prop-types';
// import Counter from './counter';

const Products = ({ products }) => (
  <main>
    {products.map(({ id, price, name, url_image: url }, index) => (
      <div key={ index }>
        <div>
          <p
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            {price.replace(/\./, ',')}
          </p>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ url }
            alt={ name }
            width="50"
          />
        </div>
        <div>
          <p
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </p>
          {/* <Counter id={ id } name={ name } price={ price } /> */}
        </div>
      </div>
    ))}
  </main>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

Products.defaultProps = {
  products: [],
};

export default Products;
