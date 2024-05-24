import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import { nanoid } from "nanoid";

const App = () => {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Animal-1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus expedita debitis iure",
    },
    {
      id: 2,
      name: "Animal-2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus expedita debitis iure",
    },
    {
      id: 3,
      name: "Animal-3",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus expedita debitis iure",
    },
  ]);
  const [form, setForm] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    const payload = { ...form, id };
    animals.push(payload);
    setAnimals([...animals]);
    e.target.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const deleteAnimal = (id) => {
    const newAnimal = animals.filter((item) => item.id !== id);
    setAnimals([...newAnimal]);
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Animal name ..."
                  className="form-control my-2"
                  required
                />
                <textarea
                  onChange={handleChange}
                  name="desc"
                  cols={30}
                  rows={10}
                  placeholder="Description"
                  className="form-control my-2"
                  required
                ></textarea>
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success" form="submit">
                add animal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-row">
        {animals.map((item, index) => (
          <div className="row-card" key={index}>
            <Card animal={item} deleteAnimal={deleteAnimal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
