import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("address", user.address);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  
const [input, setInput] = useState({ name: "", email: "", address: "" });
const [file, setFile] = useState(null);

  return (
    <div className="addUser">
      <Link type="button" to={"/"} className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Voltar
      </Link>
      <h3>Adicionar Novo Morador</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
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
            onChange={inputHandler}
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
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Rua Brasil, 123, Bairro Centro"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Foto:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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
