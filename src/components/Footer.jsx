import { useAuth } from "../context/useContext";

const Footer = () => {
  const { temma } = useAuth()
  return (
    <div className={`flex flex-row justify-around items-center ${temma}`}>
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
