import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userTable">
      <div className="header">
        <Link to="/add" type="button" className="btn btn-primary">
          Adicionar Morador <i className="fa-solid fa-user-plus"></i>
        </Link>

        <h2>
          Condomínio Uniube <i className="fa-solid fa-building"></i>
        </h2>
      </div>

      {users.length === 0 ? (
        <div className="noData">
          <h3>Nenhum morador encontrado</h3>
          <p>Adicione um morador para começar</p>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Foto</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Endereço</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    {user.image && (
                      <img
                        src={`http://localhost:8000${user.image}`}
                        alt="Foto"
                        style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className="actionButtons">
                    <Link
                      to={`/update/${user._id}`}
                      type="button"
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
