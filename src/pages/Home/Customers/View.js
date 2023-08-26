import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../utils/useFetch";

function View() {
  const { id } = useParams();
  const { data: employee } = useFetch(`http://localhost:8000/employees/${id}`);

  return (
    <div className="p-4 container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>
          <div className="card">
            <div className="card-header">
              Details of employee #{id}:
              <ul className="list-group list-group-flush my-2">
                <li className="list-group-item">
                  <b>Name: </b>
                  <span>{employee.name}</span>
                </li>
                <li className="list-group-item">
                  <b>Address: </b>
                  <span>{employee.address}</span>
                </li>
                <li className="list-group-item">
                  <b>City: </b>
                  <span>{employee.city}</span>
                </li>
                <li className="list-group-item">
                  <b>Pin code: </b>
                  <span>{employee.pinCode}</span>
                </li>
                <li className="list-group-item">
                  <b>Country: </b>
                  <span>{employee.country}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
