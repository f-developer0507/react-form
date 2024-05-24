const Card = ({ animal, deleteAnimal }) => {
  return (
    <>
      <div className="card-header">
        <h1 className="card__title">{animal.name}</h1>
      </div>
      <div className="card-body">
        <p className="card__text">{animal.desc}</p>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-danger" onClick={()=>deleteAnimal(animal.id)}>
          delete
        </button>
      </div>
    </>
  );
};

export default Card;
