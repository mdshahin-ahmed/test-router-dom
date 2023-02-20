import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRoute></AppRoute>
      </Router>
    </div>
  );
}

export default App;
