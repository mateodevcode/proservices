import { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [themma, setThemma] = useState("light");
  const [menu, setmenu] = useState(false)
  const [estadoMenu, setEstadoMenu] = useState("ocultarMenu")


  const onclickTemma = () => {
    if (themma == "dark") {
      setThemma("light");
    } else {
      setThemma("dark");
    }
  };

  const onclickMenu = () => {
    if (menu == false) {
      setmenu(true)
      setEstadoMenu("mostrarMenu")
    } else {
      setmenu(false)
      setEstadoMenu("ocultarMenu")
    }
  }

  

  return (
    <AuthContext.Provider value={{ themma, onclickTemma, estadoMenu, onclickMenu, menu }}>
      {children}
    </AuthContext.Provider>
  );
};
