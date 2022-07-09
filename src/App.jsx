import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditScreen from "./pages/EditScreen";
import ErrorScreen from "./pages/ErrorScreen";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/edit" element={<EditScreen />} />
        {/* <Route path="/post/:id" element={<EditScreen />} /> */}
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
