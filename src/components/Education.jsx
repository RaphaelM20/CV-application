import { useState } from "react";
import "../styles/Education.css";

export default function Education() {
  const [experience, setExperience] = useState([
    {
      id: 1,
      schoolName: "",
      major: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [isEditing, setIsEditing] = useState(true);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const handleChange = (id, field, value) => {
    const updated = experience.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    setExperience(updated);
  };

  return (
    <>
      {isEditing ? (
        <>
          <div className="education-form">
            <h2>Education</h2>
            {experience.map((exp) => (
              <div key={exp.id}>
                <label>University: </label>
                <input
                  type="text"
                  value={exp.schoolName}
                  onChange={(e) =>
                    handleChange(exp.id, "schoolName", e.target.value)
                  }
                />
                <label>Major: </label>
                <input
                  type="text"
                  value={exp.major}
                  onChange={(e) =>
                    handleChange(exp.id, "major", e.target.value)
                  }
                />
                <label>Start Date: </label>
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) =>
                    handleChange(exp.id, "startDate", e.target.value)
                  }
                />
                <label>Graduation Date: </label>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) =>
                    handleChange(exp.id, "endDate", e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="education-display">
            <h2>Education</h2>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="edu-row">
                  <p className="school-name">{exp.schoolName}</p>
                  <p>
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                </div>
                <p>{exp.major}</p>
              </div>
            ))}
          </div>
        </>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </>
  );
}
