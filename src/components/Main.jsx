import { useAuth } from "../context/useContext";
import Gallery from "./Gallery";

const Main = () => {
  const { themma } = useAuth();
  return (
    <div className={` ${themma} bg-black h-screen`}>
      <Gallery />
    </div>
  );
};

export default Main;
