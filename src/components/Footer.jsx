import { useAuth } from "../context/useContext";

const Footer = () => {
  const { themma } = useAuth()
  return (
    <div className={`flex flex-row justify-around items-center ${themma}`}>
      <div>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>       
      </div>
      <div>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>       
      </div>
      <div>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>       
      </div>
    </div>
  );
};

export default Footer;
