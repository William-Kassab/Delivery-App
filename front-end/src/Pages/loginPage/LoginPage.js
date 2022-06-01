import React, { useState } from 'react';
import { authLogin } from '../../service/api';
import rockGlass from '../../images/rockGlass.svg';
import './loginStyle.css';

function LoginPage() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value });
  }

  async function handleClickLogin() {
    const result = await authLogin(login);
    if (!result) {
      setErrorMsg(true);
    }
    setErrorMsg(false);
    // localStorage.setItem(Dados do Usuário);
    console.log(result);
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
          >
            Ainda não tenho conta
          </button>
          {
            errorMsg && (
              <p>
                E-mail ou senha incorretos
              </p>
            )
          }
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
