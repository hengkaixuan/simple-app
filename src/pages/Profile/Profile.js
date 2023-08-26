import { useState } from "react";

function Profile() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className="text-center m-4">Login Form</h2>
          <div class="mb-3">
            <label htmlFor="userId" class="form-label">
              User Id
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="name@example.com"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={handleSubmit}
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Submit
            </button>
          </div>

          <div class="modal" id="myModal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Info</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>User Id: {userId}</p>
                  <p>Password: {password}</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
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
