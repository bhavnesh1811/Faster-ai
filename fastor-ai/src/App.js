import { Box, Divider } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import AllRoutes from "./routes/AllRoutes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [color, setColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(window.location);
    if (location.pathname.includes("/singleRestaurant")) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [location.pathname]);
  return (
    <Box className="App">
      <NavBar color={color}/>
      <Divider />
      <AllRoutes />
    </Box>
  );
}

export default App;
