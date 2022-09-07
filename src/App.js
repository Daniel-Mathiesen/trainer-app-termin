import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import WelcomePage from './pages/Welcome';
import HomePage from './pages/Home';
import SearchPage from "./pages/Search";
import Schedule from "./pages/Schedule";
import DetailPage from "./pages/Details";
import Login from "./pages/Login";

function App() {

  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/details/:classId" element={<DetailPage />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
