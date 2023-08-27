import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import View from "./pages/Home/Customers/View";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import Settings from "./pages/Settings/Settings";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-1">
            <Sidebar />
          </div>
          <div className="col-11">
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/customers/:id" element={<View />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/messages" element={<Messages />} />
                <Route exact path="/settings" element={<Settings />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
