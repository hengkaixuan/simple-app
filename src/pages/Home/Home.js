import { React, useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import TreeMenu from "../../components/TreeMenu/TreeMenu";

const treeData = [
  {
    id: "1",
    name: "USA",
    children: [
      {
        id: "2",
        name: "New York",
        children: [
          { id: "3", name: "New York city" },
          { id: "4", name: "Buffalo" },
          { id: "5", name: "Albany" },
        ],
      },
      {
        id: "6",
        name: "Alabama",
        children: [
          { id: "7", name: "Alexander City" },
          { id: "8", name: "Athens" },
          { id: "9", name: "Clanton" },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Canada",
    children: [
      {
        id: "11",
        name: "Ontario",
        children: [
          { id: "12", name: "Bancroft" },
          { id: "13", name: "Cornwall" },
          { id: "14", name: "Hamilton" },
        ],
      },
      {
        id: "15",
        name: "British Columbia",
        children: [
          { id: "16", name: "Delta" },
          { id: "17", name: "Nelson" },
          { id: "18", name: "Victoria" },
        ],
      },
    ],
  },
];

function Home() {
  const { data: customers } = useFetch("http://localhost:8000/customers");
  const [selectedName, setSelectedName] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  useEffect(() => {
    setFilteredCustomers(customers);
  }, [customers]);

  const handleSelection = (event, nodeIds) => {
    console.log("nodeIds" + nodeIds);
    const selectedName = findNameById(treeData, nodeIds);
    console.log("selectedName" + selectedName);

    if (selectedName) {
      setSelectedName(selectedName);
      const filtered = customers.filter((customer) => {
        return (
          customer.country === selectedName || customer.city === selectedName
        );
      });
      setFilteredCustomers(filtered);
    }
  };
  const findNameById = (data, targetId) => {
    for (const obj of data) {
      const result = findNameByIdRecursive(obj, targetId);
      if (result) {
        return result;
      }
    }
    return null;
  };

  const findNameByIdRecursive = (obj, targetId) => {
    if (obj.id === targetId) {
      return obj.name;
    }

    if (obj.children) {
      for (const child of obj.children) {
        const result = findNameByIdRecursive(child, targetId);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  return (
    <div div className="p-4 container-fluid">
      <div className="row">
        <div className="col-3">
          <TreeMenu data={treeData} handleSelection={handleSelection} />
        </div>
        <div className="col-9">
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
                {filteredCustomers.map((customer, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>{customer.city}</td>
                    <td>{customer.pinCode}</td>
                    <td>{customer.country}</td>
                    <td>
                      <Link className="btn" to={`/customers/${customer.id}`}>
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
