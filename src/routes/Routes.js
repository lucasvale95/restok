import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<h1>About</h1>} />
      <Route path="contacts" element={<h1>Contacts</h1>} />
    </Routes>
  );
}

export default RoutesProvider;
