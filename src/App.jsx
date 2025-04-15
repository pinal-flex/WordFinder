import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto max-w-[1232px] px-4">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
