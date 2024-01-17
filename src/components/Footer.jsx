import { useAuth } from "../context/useContext";

const Footer = () => {
  const { themma } = useAuth();
  return (
    <div className={`flex flex-row justify-around items-center  border-t-2 ${
      themma == "light"
        ? "bg-white  border-black text-black"
        : "bg-black border-red-700 text-white "
    }`}>
      <p>
        Todos los derechos reservados. Desarrollado por{" "}
        <strong>Rockasus</strong> © 2023
      </p>
    </div>
  );
};

export default Footer;
