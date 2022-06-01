import React from 'react';

function LoginPage() {
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
              data-testid="common_login__input-email"
              placeholder="email@trybeer.com.br"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              data-testid="common_login__input-password"
              placeholder="***********"
            />
          </label>
          <button
            type="button"
            data-testid="common_login__button-login"
          >
            Login
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
