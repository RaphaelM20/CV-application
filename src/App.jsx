import NameAndContactInfo from "./components/NameAndContactInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import './App.css';

export default function App() {
  return (
    <>
      <div className="resume">
        <NameAndContactInfo />
        <Education />
        <Experience />
      </div>
    </>
  );
}
