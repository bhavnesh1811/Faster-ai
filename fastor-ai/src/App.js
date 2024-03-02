import { Box, Divider } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Divider />
      <AllRoutes />
    </Box>
  );
}

export default App;
