import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../context/MyContext';
import { deleteUserByAdmin, getUsers } from '../../service/api';
import './usersTable.css';

export default function UsersTable() {
  const { user } = useContext(MyContext);
  const [userList, setUserList] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    (async () => {
      const result = await getUsers(user.token);
      const filteredList = [];
      result.data.map(
        (e) => e.role !== 'administrator' && filteredList.push(e),
      );
      setUserList(filteredList);
    })();
  }, []);

  const deleteUser = async (id) => {
    await deleteUserByAdmin(user.token, id);
    refreshPage();
  };

  return (
    <table className="users-table-container">
      <thead className="table-head">
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Exlcuir</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {userList.map(({ id, name, email, role }, index) => (
          <tr key={ id }>
            <td
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              {index + 1}
            </td>

            <td
              data-testid={ `admin_manage__element-user-table-name-${index}` }
            >
              {name}
            </td>

            <td
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              {email}
            </td>

            <td
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              {role}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
            >
              <button
                type="button"
                onClick={ () => deleteUser(id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
