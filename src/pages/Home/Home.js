import { React, useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import DynamicTreeView from "../../components/TreeMenu/DynamicTreeView";

const treeData = [
  {
    name: "USA",
    children: [
      {
        name: "New York",
        children: [
          { name: "New York city" },
          { name: "Buffalo" },
          { name: "Albany" },
        ],
      },
      {
        name: "Alabama",
        children: [
          { name: "Alexander City" },
          { name: "Athens" },
          { name: "Clanton" },
        ],
      },
    ],
  },
];

function Home() {
  const { data: employees } = useFetch("http://localhost:8000/employees");

  return (
    <div div className="p-4 container-fluid">
      <div className="row">
        <div className="col-4">
          <TreeMenu data={treeData} />
        </div>
        <div className="col-8">
          <h3 style={{ marginBottom: "8px" }}>Customer Details</h3>
          <div className="py-4">
            <table class="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">Pin code</th>
                  <th scope="col">Country</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{employee.name}</td>
                    <td>{employee.address}</td>
                    <td>{employee.city}</td>
                    <td>{employee.pinCode}</td>
                    <td>{employee.country}</td>
                    <td>
                      <Link className="btn" to={`/employees/${employee.id}`}>
                        <i
                          className="bi bi-eye-fill"
                          style={{ color: "DodgerBlue" }}
                        ></i>
                      </Link>
                      <button className="btn">
                        <i
                          className="bi bi-pencil-fill"
                          style={{ color: "orange" }}
                        ></i>
                      </button>
                      <button className="btn">
                        <i
                          className="bi bi-trash-fill"
                          style={{ color: "red" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
