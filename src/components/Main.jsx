import { useAuth } from "../context/useContext";
import Gallery from "./Gallery";

const Main = () => {
  const { themma } = useAuth();
  return (
    <div className=  {`h-screen  ${themma}`}>
      <Gallery />
    </div>
  );
};

export default Main;
