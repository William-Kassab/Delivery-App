import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../service/api';
import rockGlass from '../../images/rockGlass.svg';
import './loginStyle.css';

function LoginPage() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  function handleChange({ target }) {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value });
  }

  async function handleClickLogin() {
    const result = await authLogin(login);
    if (result === 'invalid Login') {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      localStorage.setItem('user', JSON.stringify(result.data));
      switch (result.data.role) {
      case 'administrator':
        navigate('/admin/manage');
        break;
      case 'customer':
        navigate('/customer/products');
        break;
      default:
        navigate('/seller/orders');
        break;
      }
    }
  }

  const regex = (/\S+@\S+\.\S+/);
  const length = 5;
  const passwordIsValid = login.password.length > length;
  const isEmailValid = regex.test(login.email);

  return (
    <div className="login-page">
      <div className="login-container">
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
        <h1>App de delivery </h1>
        <form className="login-form">
          <label htmlFor="email">
            Login
            <input
              type="email"
              name="email"
              value={ login.email }
              data-testid="common_login__input-email"
              placeholder="email@trybeer.com.br"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              value={ login.password }
              data-testid="common_login__input-password"
              placeholder="***********"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            className="login-btn"
            data-testid="common_login__button-login"
            onClick={ handleClickLogin }
            disabled={ !(isEmailValid && passwordIsValid) }
          >
            LOGIN
          </button>
          <button
            type="button"
            className="create-btn"
            data-testid="common_login__button-register"
            onClick={ () => navigate('/register') }
          >
            Ainda não tenho conta
          </button>
        </form>
        {
          errorMsg && (
            <p
              data-testid="common_login__element-invalid-email"
              style={ { color: 'red' } }
            >
              E-mail ou senha incorretos
            </p>
          )
        }
      </div>
    </div>
  );
}

export default LoginPage;
