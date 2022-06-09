import React from 'react';
import Navbar from '../../components/navbar';
import RegisterForm from '../../components/registerForm/RegisterForm';
import UsersTable from '../../components/usersTable/UsersTable';

export default function AdminManage() {
  return (
    <div>
      <Navbar />
      <h2 className="form-title">Cadastrar novo usuário</h2>
      <RegisterForm />
      <h2 className="form-title">Lista de usuários</h2>
      <UsersTable />
    </div>
  );
}
