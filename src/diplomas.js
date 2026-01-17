import { Link, Outlet } from "react-router-dom";
import { useState } from "react"; // <-- ADD THIS

const diplomasData = [
  { id: "R13", name: "Diploma in Applied AI & Analytics" },
  { id: "R55", name: "Diploma in Cybersecurity & Digital Forensics" },
  { id: "R12", name: "Diploma in Enterprise Cloud Computing & Management" },
  { id: "R18", name: "Diploma in Financial Technology" },
  { id: "R47", name: "Diploma in Information Technology" }
];

function Diplomas() {
  const [search, setSearch] = useState(""); // <-- ADD STATE

  const filteredDiplomas = diplomasData.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Diplomas</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search diplomas..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="diploma-list">
        {filteredDiplomas.map(d => (
          <p key={d.id}>
            <Link to={d.id}>{d.name}</Link>
          </p>
        ))}
      </div>

      <Outlet />
    </div>
  );
}

export default Diplomas;
