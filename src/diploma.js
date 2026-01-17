import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const modulesData = {
    R13: [
      { id: "C110", name: "Programming Fundamentals I" },
      { id: "C112", name: "Introduction to Business Process and Automation" },
      { id: "C206", name: "Software Development Process" },
      { id: "C207", name: "Database Systems" },
      { id: "C210", name: "Programming Fundamentals II" },
      { id: "C227", name: "Operating Systems and Networking" },
      { id: "C230", name: "Data Wrangling and Automation" },
      { id: "C235", name: "IT Security and Management" },
      { id: "C237", name: "Software Application Development" },
      { id: "C240", name: "AI Essentials and Innovations" },
      { id: "C245", name: "Data Analytics with GenAI" },
      { id: "C339", name: "Software Testing and Analytics" }
    ],

    R55: [
      { id: "C374", name: "Ethical Hacking" },
      { id: "C331", name: "Digital Forensics and Malware Analysis" },
      { id: "C335", name: "Network Security" },
      { id: "C350", name: "Security Design and Architecture" },
      { id: "C371", name: "Application Security" },
      { id: "C377", name: "Threat Hunting and Incident Response" }
    ],

    R47: [
      { id: "C110", name: "Programming Fundamentals I" },
      { id: "C206", name: "Software Development Process" },
      { id: "C207", name: "Database Systems" },
      { id: "C237", name: "Software Application Development" },
      { id: "C240", name: "AI Essentials and Innovations" }
    ],

    R12: [
      { id: "C229", name: "Cloud Computing Essentials" },
      { id: "C270", name: "DevOps Essentials" },
      { id: "C320", name: "Cloud Architecting and Administration" },
      { id: "C322", name: "Cloud Data Centre Management" },
      { id: "C330", name: "Linux Administration and Containerisation" },
      { id: "C381", name: "IT Service and AI Operations" }
    ],

    R18: [
      { id: "C240", name: "AI Essentials and Innovations" },
      { id: "C245", name: "Data Intelligence and Visualisation" },
      { id: "C387", name: "Machine Learning for Predictive Analytics" }
    ]
  };

const diplomaNames = {
    R13: "Diploma in Applied Artificial Intelligence & Analytics",
    R55: "Diploma in Cybersecurity & Digital Forensics",
    R47: "Diploma in Information Technology",
    R12: "Diploma in Enterprise Cloud Computing & Management",
    R18: "Diploma in Financial Technology"
  };

function Diploma() {
  const { diplomaId } = useParams();
  const modules = modulesData[diplomaId] || [];
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(stored);
  }, []);

  const toggleFavourite = module => {
    let updated;
    if (favourites.some(f => f.id === module.id)) {
      updated = favourites.filter(f => f.id !== module.id);
    } else {
      updated = [...favourites, { ...module, diplomaId }];
    }
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  const isFavourite = module => favourites.some(f => f.id === module.id);

  return (
    <div className="container module-list">
      <h3>{diplomaNames[diplomaId]}</h3>

      {modules.map(m => (
        <p key={m.id}>
          <Link to={m.id}>{m.name}</Link>
          <button
            className={isFavourite(m) ? "fav-active" : ""}
            onClick={() => toggleFavourite(m)}
          >
            {isFavourite(m) ? "★ Remove" : "☆ Favourite"}
          </button>
        </p>
      ))}

      <Outlet />
    </div>
  );
}

export default Diploma;
