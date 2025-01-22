import "./index.css";
import Navbar from "./Components/Nav/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Pages/Store/Store";
import Container from "./Components/Container/Container";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
