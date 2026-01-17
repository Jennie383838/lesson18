import { Link, Outlet } from "react-router-dom";

const diplomas = [
  { id: "R13", name: "Diploma in Applied AI & Analytics" },
  { id: "R55", name: "Diploma in Cybersecurity & Digital Forensics" },
  { id: "R12", name: "Diploma in Enterprise Cloud Computing & Management" },
  { id: "R18", name: "Diploma in Financial Technology" },
  { id: "R47", name: "Diploma in Information Technology" }
];

function Diplomas() {
  return (
    <div className="container">
      <h1>Diplomas</h1>
      <div className="container diploma-list">
      {diplomas.map(d => (
        <p key={d.id}>
          <Link to={d.id}>{d.name}</Link>
        </p>
      ))}

      <Outlet />
      </div>
    </div>
  );
}

export default Diplomas;
