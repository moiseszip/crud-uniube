import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">
        <Link type="button" className="btn btn-secondary">
          <i className="fa-solid fa-backward"></i> Voltar
        </Link>
      <h3>Adicionar Novo Usuário</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Fulano da Silva"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="fulano@email.com"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Rua Brasil, 123, Bairro Centro"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
