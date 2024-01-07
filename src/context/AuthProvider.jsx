import { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [temma, setTemma] = useState("light");

  const onclickTemma = () => {
    if (temma == "dark") {
      setTemma("light");
    } else {
      setTemma("dark");
    }
  };

  return (
    <AuthContext.Provider value={{ temma, onclickTemma }}>
      {children}
    </AuthContext.Provider>
  );
};
