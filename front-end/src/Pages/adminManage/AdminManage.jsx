import React from 'react';

export default function AdminManage() {
  return (
    <div>
      <form>
        <h1>Cadastrar um novo usuário</h1>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            data-testid="admin_manage__input-name"
            placeholder="Nome e sobrenome"
          />
        </label>
        <label htmlFor="email">
          Login
          <input
            type="email"
            name="email"
            data-testid="admin_manage__input-email"
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="admin_manage__input-password"
            placeholder="***********"
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select name="role" id="role" data-testid="admin_manage__select-role">
            <option value="Vendedor">Vendedor</option>
            <option value="Cliente">Cliente</option>
            <option value="Administrador">Administrador</option>
          </select>
        </label>
        <button type="button" data-testid="admin_manage__button-register">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
