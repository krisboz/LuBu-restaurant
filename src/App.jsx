import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
