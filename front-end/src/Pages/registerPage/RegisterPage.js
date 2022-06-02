import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerImg from '../../images/registerImg.svg';
import { createUser } from '../../service/api';
import './registerStyle.css';
import backImg from '../../images/left.svg';

function RegisterPage() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  function handleChange({ target }) {
    const { name, value } = target;
    setRegister({
      ...register,
      [name]: value });
  }

  async function handleClickRegister() {
    const result = await createUser(register);
    if (result === 'invalid Register') {
      setErrorMsg(true);
    } else {
      localStorage.setItem('user', JSON.stringify(result.data));
      navigate('/customer/products');
      console.log(result.data);
    }
  }

  const regex = (/\S+@\S+\.\S+/);
  const lengthEmail = 5;
  const lengthName = 12;
  const passwordIsValid = register.password.length > lengthEmail;
  const isEmailValid = regex.test(register.email);
  const nameIsValid = register.name.length >= lengthName;
  const isValid = (passwordIsValid && isEmailValid && nameIsValid);

  return (
    <div className="register-page">
      <div className="register-container">
        <img
          src={ registerImg }
          alt="Amigos abrindo uma lata de bebida"
        />
        <h1>Cadastro</h1>
        <form className="register-form">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              value={ register.name }
              data-testid="common_register__input-name"
              placeholder="Fulano"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={ register.email }
              data-testid="common_register__input-email"
              placeholder="email@trybeer.com.br"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              value={ register.password }
              data-testid="common_register__input-password"
              placeholder="***********"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="common_register__button-register"
            className="register-btn"
            onClick={ handleClickRegister }
            disabled={ !isValid }
          >
            CADASTRAR
          </button>
        </form>
        {
          errorMsg && (
            <p
              data-testid="common_register__element-invalid_register"
              style={ { color: 'red' } }
            >
              Dados inválidos
            </p>
          )
        }
        <div>
          <button
            type="button"
            className="back-login"
            onClick={ () => navigate('/login') }
          >
            <img src={ backImg } alt="Left arrow icon" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
