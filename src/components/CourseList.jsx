import React, { useState } from "react";
import Course from "./Course";
import TermSelector from "./TermSelector";

const CourseList = ({ courses }) => {
  const [term, setTerm] = useState("Fall");
  const [selected, setSelected] = useState([]);

  console.log("Courses received in CourseList:", courses);

  if (!courses || typeof courses !== "object") {
    console.error("Invalid courses format:", courses);
    return <h3>No courses available.</h3>;
  }

  
  const termCourses = Object.entries(courses)
    .filter(([id, course]) => course.term === term) 
    .map(([id, course]) => (
      <Course key={id} course={{ id, ...course }} selected={selected} setSelected={setSelected} />
    ));

  console.log(`Filtered Courses for term ${term}:`, termCourses);

  return (
    <>
      <TermSelector term={term} setTerm={setTerm} />
      <div className="course-list">
        {termCourses.length > 0 ? termCourses : <h3>No courses available for this term.</h3>}
      </div>
    </>
  );
};

export default CourseList;

































