import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 h-100">
          <ul className="nav nav-tabs flex-column" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                data-bs-target="#nav-home"
                href="/"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="/profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="messages-tab"
                data-toggle="tab"
                href="/messages"
                role="tab"
                aria-controls="messages"
                aria-selected="false"
              >
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="settings-tab"
                data-toggle="tab"
                href="/settings"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
