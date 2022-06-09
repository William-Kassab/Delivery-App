import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../context/MyContext';
import { getUsers } from '../../service/api';

export default function UsersTable() {
  const { user } = useContext(MyContext);
  const [userList, setUserList] = useState([]);

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

  return (
    <div>
      Lista de usuários
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Exlcuir</th>
          </tr>
        </thead>
        <tbody>
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
                <button type="button">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
