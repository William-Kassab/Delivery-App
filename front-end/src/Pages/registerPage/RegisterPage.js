import React, { useState } from 'react';
import { authLogin } from '../../service/api';

function RegisterPage() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value });
  }

  async function handleClickLogin() {
    const result = await authLogin(login);
    // localStorage.setItem(Dados do Usuário);
    console.log(result);
  }

  const regex = (/\S+@\S+\.\S+/);
  const length = 5;
  const passwordIsValid = login.password.length > length;
  const isEmailValid = regex.test(login.email);

  return (
    <div>
      <div>
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="imagem-profile"
        />
        <form>
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
            data-testid="common_login__button-login"
            onClick={ handleClickLogin }
            disabled={ !(isEmailValid && passwordIsValid) }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
