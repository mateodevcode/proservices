import "../main.css";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineApps } from "react-icons/md";
import { useAuth } from "../context/useContext";
import MenuDesplegable from "./MenuDesplegable";
import Logolight from "./Logolight.jsx";
import Logodark from "./Logodark.jsx";

const Header = () => {
  const { themma, onclickTemma, onclickMenu } = useAuth();

  return (
    <>
      <nav
        className={`w-full flex md:flex-row justify-between items-center border-b-2 ${
          themma == "light"
            ? "bg-white  border-black text-black"
            : "bg-black border-red-700 text-white "
        }`}
      >
        <div className="md:ml-16 sm:ml-2 flex flex-row justify-center items-center">
        {themma == "light" ? <Logolight /> : <Logodark />}
        </div>
        <div className="">
          <ul
            className={`md:flex md:flex-row sm:flex-col justify-center items-center sm:hidden`}
          >
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
          <MdOutlineApps
            className="text-2xl mx-2 md:hidden"
            onClick={onclickMenu}
          />
        </div>
      </nav>
      <MenuDesplegable />
    </>
  );
};

export default Header;
