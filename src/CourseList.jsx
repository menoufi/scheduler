import React from "react";

const CourseList = ({ courses }) => (
  <div>
    {Object.values(courses).map((course) => (
      <div key={course.id}>
        <h2>{course.title}</h2>
        <p>{course.meets}</p>
      </div>
    ))}
  </div>
);

export default CourseList;
