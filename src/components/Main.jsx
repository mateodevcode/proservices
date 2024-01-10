import { useAuth } from "../context/useContext";


const Main = () => {
  const { themma } = useAuth();  
  return (
    <div className={`h-screen ${themma}`}>
      
    </div>
  )
}

export default Main
