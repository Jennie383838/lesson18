import { useNavigate } from "react-router-dom";
import { useState } from "react";

const courses = [
  "Diploma in Applied AI & Analytics",
  "Diploma in Cybersecurity & Digital Forensics",
  "Diploma in Enterprise Cloud Computing & Management",
  "Diploma in Financial Technology",
  "Diploma in Information Technology"
];

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState(courses[0]);

  const submitHandler = e => {
    e.preventDefault();

    navigate("/confirmation", {
      state: { name, email, course }
    });
  };

  return (
    <form onSubmit={submitHandler} className="container">
      <h2>Course Registration</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <select value={course} onChange={e => setCourse(e.target.value)}>
        {courses.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
