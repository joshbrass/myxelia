import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainNavbar from "./components/navbar/main-navbar/MainNavbar";
import Dashbaord from "./pages/dashboard/Dashbaord";

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashbaord />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
