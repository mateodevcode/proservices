import { useAuth } from "../context/useContext";

const Footer = () => {
  const { themma } = useAuth();
  return (
    <div className={`flex flex-row justify-around items-center ${themma}`}>
      <p>
        Todos los derechos reservados. Desarrollado por{" "}
        <strong>Rockasus</strong> © 2023
      </p>
    </div>
  );
};

export default Footer;
