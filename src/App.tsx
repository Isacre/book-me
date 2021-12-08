import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import AddToColection from "./pages/AddToColection";
import BookInfo from "./pages/BookInfo";
import Emprestado from "./pages/Emprestado";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="info" element={<BookInfo />}>
              <Route path=":livro" />
            </Route>
            <Route path="emprestado" element={<Emprestado />}>
              <Route path=":livro" />
            </Route>
            <Route path="/adicionar" element={<AddToColection />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
