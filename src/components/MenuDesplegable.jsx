import { useAuth } from "../context/useContext";
import Enlace from "./Enlace";

const MenuDesplegable = () => {
  const { themma, estadoMenu, menu } = useAuth();

  return (
    <div className={` ${estadoMenu} `}>
      <ul
        className={`flex flex-col  md:hidden justify-center items-start ${themma} ${
          menu == false ? "sm:hidden" : "sm:flex"
        }`}
      >
        <Enlace nombre={"INICIO"} />
        <Enlace nombre={"SERVICIOS"} />
        <Enlace nombre={"PROYECTOS"} />
        <Enlace nombre={"ACERCA DE NOSOTROS"} />
        <Enlace nombre={"CONTACTENOS"} />
      </ul>
    </div>
  );
};

export default MenuDesplegable;
