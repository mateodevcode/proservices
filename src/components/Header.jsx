import "../main.css";
import logoProservices from "../data/Header";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineApps } from "react-icons/md";
import { useAuth } from "../context/useContext";
import MenuDesplegable from "./MenuDesplegable";

const Header = () => {
  const { themma, onclickTemma, onclickMenu, mostarMenu, menu } = useAuth();

  console.log(menu);

  return (
    <>
      <nav
      className={`w-full flex md:flex-row justify-between items-center ${
        themma == "light"
          ? "bg-white shadow-lg shadow-gray-500/50"
          : "bg-gray-800 shadow-lg shadow-red-700/20"
      } ${themma}`}
    >
      <div className="md:ml-16 sm:ml-2 flex flex-row justify-center items-center">
        <img
          className="w-8 rounded-xl my-1"
          src={logoProservices[0].img}
          alt="Logo de imagen principal de bienvenida"
        />
        <img
          className="w-36 rounded-xl my-1"
          src={logoProservices[1].img}
          alt="Logo de imagen principal de bienvenida"
        />
      </div>
      <div className="">
        <ul className={`md:flex md:flex-row sm:flex-col justify-center items-center sm:hidden`}>
          <li className="mx-3 text-trueGray-800 font-semibold cursor-pointer text-sm">
            INICIO
          </li>
          <li className="mx-3 text-trueGray-800 font-semibold cursor-pointer text-sm">
            SERVICIOS
          </li>
          <li className="mx-3 text-trueGray-800 font-semibold cursor-pointer text-sm">
            PROYECTOS
          </li>
          <li className="mx-3 text-trueGray-800 font-semibold cursor-pointer text-sm">
            ACERCA DE NOSOTROS
          </li>
          <li className="mx-3 text-trueGray-800 font-semibold cursor-pointer text-sm">
            CONTACTENOS
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-row justify-center items-center ${themma} md:mr-16`}
      >
        <div onClick={onclickTemma}>
          <MdOutlineLightMode
            className={`text-xl ${themma == "light" ? "hidden" : "flex"}`}
          />
          <FaMoon
            className={`text-xl ${themma == "light" ? "flex" : "hidden"}`}
          />
        </div>
        <MdOutlineApps className="text-2xl mx-2" onClick={onclickMenu} />
      </div>
    </nav>
    <MenuDesplegable />
    </>
  );
};

export default Header;
