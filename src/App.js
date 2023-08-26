import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import View from "./pages/Home/Customers/View";
import Edit from "./pages/Home/Customers/Edit";
import Delete from "./pages/Home/Customers/Delete";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import Settings from "./pages/Settings/Settings";
import DynamicTreeView from "./components/TreeMenu/DynamicTreeView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const treeData = [
//   {
//     text: "USA",
//     nodes: [
//       {
//         text: "New York",
//         nodes: [
//           { text: "New York city" },
//           { text: "Buffalo" },
//           { text: "Albany" },
//         ],
//       },
//       {
//         text: "Alabama",
//         nodes: [
//           { text: "Alexander City" },
//           { text: "Athens" },
//           { text: "Clanton" },
//         ],
//       },
//     ],
//   },
// ];

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-2">
            <Sidebar />
          </div>

          <div className="col-10">
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/employees/:id" element={<View />} />
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
