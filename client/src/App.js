import AddUser from "./addUser/AddUser.jsx";
import "./App.css";
import User from "./getuser/User.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./updateUser/Update.jsx";
import { useEffect, useState } from "react";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: "white",
    padding: "20px",
    margin: "0 80px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
    marginTop: "10px",
  };

  const subStyle = {
    fontWeight: "400",
    fontSize: "18px",
    marginTop: "10px",
    maxWidth: "600px",
  };

  return (
    <div className="App">
      {showWelcome && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Bem‑vindo, administrador!</h2>
            <h3 style={subStyle}>
              Este é o sistema de gerenciamento de moradores do condomínio
              Uniube, fique à vontade para criar o perfil de cada um dos
              moradores.
            </h3>
            <button style={buttonStyle} onClick={() => setShowWelcome(false)}>Fechar</button>
          </div>
        </div>
      )}
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
