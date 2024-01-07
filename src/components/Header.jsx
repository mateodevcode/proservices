import "../main.css";
import logoProservices from "../data/Header";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineApps } from "react-icons/md";
import { useAuth } from "../context/useContext";

const Header = () => {
  const { temma, onclickTemma } = useAuth();

  return (
    <nav
      className={`w-full flex flex-row justify-between items-center ${
        temma == "light"
          ? "bg-cyan-500 shadow-lg shadow-cyan-500/50"
          : "bg-gray-800 shadow-lg shadow-gray-700"
      } ${temma}`}
    >
      <div className="ml-16 flex flex-row justify-center items-center">
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
      <div>
        <ul className="flex flex-row justify-center items-center">
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
        className={`flex flex-row justify-center items-center ${temma} mr-16`}
        onClick={onclickTemma}
      >
        <MdOutlineLightMode
          className={`text-xl ${temma == "light" ? "hidden" : "flex"}`}
        />
        <FaMoon className={`text-xl ${temma == "light" ? "flex" : "hidden"}`} />
        <MdOutlineApps className="text-2xl mx-2" />
      </div>
    </nav>
  );
};

export default Header;
