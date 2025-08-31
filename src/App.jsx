import { Outlet } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
