import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Erro", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="userTable">
      <Link
        to="/add"
        type="button"
        class="btn btn-primary"
      >
        Adicionar Usuário <i class="fa-solid fa-user-plus"></i>
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Endereço</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  <Link to={`/update/`+user._id} type="button" class="btn btn-info">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button type="button" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
