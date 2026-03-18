import { useState } from "react";
import "../styles/NameAndContactInfo.css";

export default function NameAndContactInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      {isEditing ? (
        <>
          <div className="contact-form">
            <h1>Contact Info: </h1>
            <label>First Name: </label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <label>Last Name: </label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>Phone Number: </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="contact-display">
            <h1>{firstName} {lastName}</h1>
            <p>{phoneNumber} | {email}</p>
          </div>
        </>
      )}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </>
  );
}
