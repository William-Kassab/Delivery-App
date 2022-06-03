import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Products from '../../components/products';
import { getProducts } from '../../service/api';
import searchIcon from '../../images/search.svg';
import './customerProducts.css';

const CustomerProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await getProducts(token);
      console.log(data);
      setProducts(data);
    })();
  }, []);

  function filterProductsByName() {
    if (searchInput === '') {
      return products;
    }
    const filterByName = products.filter((product) => (
      product.name.toUpperCase().includes(searchInput.toUpperCase())));
    return filterByName;
  }

  return (
    <>
      <Navbar />
      <div className="searchBar">
        <input
          type="text"
          name="search"
          onChange={ ({ target }) => setSearchInput(target.value) }
          value={ searchInput }
          placeholder="Pesquise uma bebida"
        />
        <img src={ searchIcon } alt="searchIcon" />
      </div>
      {
        filterProductsByName().length === 0 ? (
          <div className="searchError">
            <p>
              Busca por:
              <span>
                {searchInput}
              </span>
            </p>
            <p>Não encontramos nenhum resultado para a sua busca</p>
            <p>Por favor tente novamente usando outro termo</p>
          </div>
        ) : (
          <Products products={ filterProductsByName() } />
        )
      }
    </>
  );
};

export default CustomerProducts;
