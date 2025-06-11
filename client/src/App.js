import AddUser from "./addUser/AddUser.jsx";
import "./App.css";
import User from "./getuser/User.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./updateUser/Update.jsx";

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
      element: <Update />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
