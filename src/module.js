import { useParams, Link } from "react-router-dom";

function Module() {
  const { diplomaId, moduleId } = useParams();

  return (
    <div>
      <h4>Module Details</h4>
      <p>Diploma: {diplomaId}</p>
      <p>Module Code: {moduleId}</p>

      <Link to="/register">Register Interest</Link>
    </div>
  );
}

export default Module;
