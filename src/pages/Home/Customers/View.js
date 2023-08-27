import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../utils/useFetch";

function View() {
  const { id } = useParams();
  const { data: customer } = useFetch(`http://localhost:8000/customers/${id}`);

  return (
    <div className="p-4 container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Customer Details</h2>
          <div className="card">
            <div className="card-header">
              Details of customer #{id}:
              <ul className="list-group list-group-flush my-2">
                <li className="list-group-item">
                  <b>Name: </b>
                  <span>{customer.name}</span>
                </li>
                <li className="list-group-item">
                  <b>Address: </b>
                  <span>{customer.address}</span>
                </li>
                <li className="list-group-item">
                  <b>City: </b>
                  <span>{customer.city}</span>
                </li>
                <li className="list-group-item">
                  <b>Pin code: </b>
                  <span>{customer.pinCode}</span>
                </li>
                <li className="list-group-item">
                  <b>Country: </b>
                  <span>{customer.country}</span>
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
