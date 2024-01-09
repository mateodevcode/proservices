import { useAuth } from "../context/useContext";


const Main = () => {
  const { themma } = useAuth()

  return <div className={`${themma} h-screen`}>
    

  </div>;
};

export default Main;
