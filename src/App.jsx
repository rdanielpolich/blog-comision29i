import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen";

import RegistroScreen from "./pages/RegistroScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesDos from "./routes/RoutesDos";

function App() {
  return (
    <BrowserRouter>
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
