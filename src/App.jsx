import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import EditScreen from "./pages/EditScreen";
import ErrorScreen from "./pages/ErrorScreen";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import PostScreen from "./pages/PostScreen";
import RegistroScreen from "./pages/RegistroScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesDos from "./routes/RoutesDos";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesDos />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

