import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Background from "./components/common/Background";
import Banner from "./components/common/Banner";
import Contact from "./components/common/Contact";
import Home from "./components/common/Home";
import Portfolio from "./components/common/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-DeepNightBlack flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Banner content={<Home />} />} />
          <Route
            path="/background"
            element={<Banner content={<Background />} />}
          />
          <Route path="/contact" element={<Banner content={<Contact />} />} />
          <Route
            path="/portfolio"
            element={<Banner content={<Portfolio />} />}
          />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
