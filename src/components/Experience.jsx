import { useState } from "react";
import "../styles/Experience.css";

export default function Experience() {
  const [experience, setExperience] = useState([
    {
      id: 1,
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      jobResponsibilities: "",
    },
  ]);

  const addAnother = () => {
    const newId = experience[experience.length - 1].id + 1;
    setExperience([
      ...experience,
      {
        id: newId,
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        jobResponsibilities: "",
      },
    ]);
  };

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
        <div className="experience-form">
          <h2>Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id}>
              <label>Job Title</label>
              <input
                type="text"
                value={exp.jobTitle}
                onChange={(e) =>
                  handleChange(exp.id, "jobTitle", e.target.value)
                }
              />
              <label>Company Name</label>
              <input
                type="text"
                value={exp.companyName}
                onChange={(e) =>
                  handleChange(exp.id, "companyName", e.target.value)
                }
              />

              <label>Start Date</label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(exp.id, "startDate", e.target.value)
                }
              />

              <label>End Date</label>
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) =>
                  handleChange(exp.id, "endDate", e.target.value)
                }
              />

              <label>Responsibilities</label>
              <input
                type="text"
                value={exp.jobResponsibilities}
                onChange={(e) =>
                  handleChange(exp.id, "jobResponsibilities", e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="experience-display">
          <h2>Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="exp-row">
                <p className="job-title">{exp.jobTitle}</p>
                <p>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </p>
              </div>
              <p className="company-name">{exp.companyName}</p>
              <ul>
                <li>{exp.jobResponsibilities}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
      <button onClick={addAnother}>Add Work Experience</button>
    </>
  );
}
