import { Link } from "react-router-dom";

export default function Favourites() {
  const favs = JSON.parse(localStorage.getItem("favourites")) || [];

  if (!favs.length) return <p className="container">No favourites yet.</p>;

  return (
    <div className="container">
      <h2>Your Favourites</h2>
      {favs.map(f => (
        <p key={f.id}>
          <Link to={`/diplomas/${f.diplomaId}/${f.id}`}>{f.name}</Link>
        </p>
      ))}
    </div>
  );
}