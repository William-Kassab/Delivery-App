import React, { useState, useContext } from 'react';
import { createUserByAdmin } from '../../service/api';
import MyContext from '../../context/MyContext';
import './registerForm.css';

export default function RegisterForm() {
  const { user } = useContext(MyContext);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [errorMsg, setErrorMsg] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setRegister({
      ...register,
      [name]: value });
  }

  async function handleClickRegister() {
    const result = await createUserByAdmin(register, user.token);
    if (result === 'invalid Register') {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      refreshPage();
    }
  }

  const regex = /\S+@\S+\.\S+/;
  const lengthEmail = 5;
  const lengthName = 12;
  const passwordIsValid = register.password.length > lengthEmail;
  const isEmailValid = regex.test(register.email);
  const nameIsValid = register.name.length >= lengthName;
  const isValid = passwordIsValid && isEmailValid && nameIsValid;

  return (
    <form>
      <fieldset className="form-container">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            value={ register.name }
            data-testid="admin_manage__input-name"
            placeholder="Nome e sobrenome"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Login
          <input
            type="email"
            name="email"
            value={ register.email }
            data-testid="admin_manage__input-email"
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
            data-testid="admin_manage__input-password"
            placeholder="***********"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            name="role"
            id="role"
            data-testid="admin_manage__select-role"
            value={ register.role }
            onChange={ handleChange }
          >
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !isValid }
          onClick={ handleClickRegister }
        >
          Cadastrar
        </button>
        {
          errorMsg && (
            <p
              data-testid="admin_manage__element-invalid-register"
              className="error-msg"
            >
              Não foi possível realizar o cadastro
            </p>
          )
        }
      </fieldset>
    </form>
  );
}
