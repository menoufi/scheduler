import { useState } from "react";
import TermSelector from "./TermSelector";
import Course from "./Course";
import { useData } from "../utilities/firebase";

const getCourseTerm = (course) => course.id[0]; 

const CourseList = () => {
  const [data, loading, error] = useData();
  const [term, setTerm] = useState("F"); 

  if (loading) return <h2>Loading the schedule...</h2>;
  if (error) return <h2>Error loading data!</h2>;

  const courses = Object.entries(data)
    .filter(([id, course]) => getCourseTerm({ id }) === term)
    .map(([id, course]) => ({ id, ...course }));

  return (
    <div>
      <h1>{data.title}</h1>
      <TermSelector term={term} setTerm={setTerm} />
      <div className="course-list">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;







