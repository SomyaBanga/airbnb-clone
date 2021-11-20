import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={ <SearchPage />}>
           
          </Route>
          <Route path="/" element={ <Home />}>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
