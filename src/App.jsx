import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(form);
    setUsers([...users]);
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Age</td>
                <td>Phone</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Add User</h3>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="form-control my-2"
                  required
                />
                <input
                  name="age"
                  onChange={handleChange}
                  type="number"
                  placeholder="Age"
                  className="form-control my-2"
                  required
                />
                <input
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone"
                  className="form-control my-2"
                  required
                />
                <input
                  name="address"
                  onChange={handleChange}
                  type="text"
                  placeholder="Address"
                  className="form-control my-2"
                  required
                />
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" type="submit" form="submit">
                add user
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
