import { useState } from "react";

function Profile() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setUserId("");
    setPassword("");
  };

  return (
    <div className="p-4 container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className="text-center m-4">Login Form</h2>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              User Id
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              data-bs-toggle="modal"
              data-bs-target="#infoModal"
            >
              Submit
            </button>
          </div>

          <div className="modal" id="infoModal" tabindex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Info</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>User Id: {userId}</p>
                  <p>Password: {password}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
