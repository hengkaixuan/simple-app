import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100">
          <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="/"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                class="nav-link active"
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
            <li class="nav-item">
              <a
                class="nav-link"
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
            <li class="nav-item">
              <a
                class="nav-link"
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
