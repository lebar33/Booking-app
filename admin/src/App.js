import "./app.styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./component/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
