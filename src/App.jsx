import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = nanoid();
    const payload = { ...form, id };
    users.push(payload);
    setUsers([...users]);
    e.target.reset();
  };

  const deleteUser = (id) => {
    let newUsers = users.filter((item) => item.id != id);
    setUsers([...newUsers]);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="row">
            <div className="col-mf-4">
              <input
                type="text"
                placeholder="Search..."
                className="form-control mb-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Phone</td>
                <td>Address</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {users?.filter((item) => {
                let name = item.name.toLocaleLowerCase()
                let address = item.address.toLocaleLowerCase()
                let find = search.toLocaleLowerCase()
                  if (name.includes(find) || address.includes(find)) {
                    return item;
                  }
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteUser(item.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
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
