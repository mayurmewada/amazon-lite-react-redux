import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";
import CreateNewProduct from "./Components/CreateNewProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/createnewproduct" element={<CreateNewProduct />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
