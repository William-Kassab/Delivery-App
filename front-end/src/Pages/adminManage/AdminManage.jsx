import React from 'react';
import RegisterForm from '../../components/registerForm/RegisterForm';

export default function AdminManage() {
  return (
    <div>
      <h2 className="form-title">Cadastrar novo usuário</h2>
      <RegisterForm />
    </div>
  );
}
