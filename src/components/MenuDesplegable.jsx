import { useAuth } from "../context/useContext";

const MenuDesplegable = () => {
    const {themma, estadoMenu, menu} = useAuth()

    return (
    <div className={` ${estadoMenu} `}>
      <ul
        className={`flex flex-col justify-center items-start ${themma} ${menu == false ? "sm:hidden" : "sm:flex"}`}
      >
        <li className={`my-1.5 font-semibold cursor-pointer text-sm ${themma == "light" ? "hover:bg-slate-500" : "hover:bg-red-600"} w-44 rounded-md py-1 pl-2`}>
          INICIO
        </li>
        <li className={`my-1.5 font-semibold cursor-pointer text-sm ${themma == "light" ? "hover:bg-slate-500" : "hover:bg-red-600"} w-44 rounded-md py-1 pl-2`}>
          SERVICIOS
        </li>
        <li className={`my-1.5 font-semibold cursor-pointer text-sm ${themma == "light" ? "hover:bg-slate-500" : "hover:bg-red-600"} w-44 rounded-md py-1 pl-2`}>
          PROYECTOS
        </li>
        <li className={`my-1.5 font-semibold cursor-pointer text-sm ${themma == "light" ? "hover:bg-slate-500" : "hover:bg-red-600"} w-44 rounded-md py-1 pl-2`}>
          ACERCA DE NOSOTROS
        </li>
        <li className={`my-1.5 font-semibold cursor-pointer text-sm ${themma == "light" ? "hover:bg-slate-500" : "hover:bg-red-600"} w-44 rounded-md py-1 pl-2`}>
          CONTACTENOS
        </li>
      </ul>
    </div>
  );
};

export default MenuDesplegable;
