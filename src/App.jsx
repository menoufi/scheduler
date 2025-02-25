import React from "react";
import { useData } from "./utilities/firebase";
import CourseList from "./components/CourseList";
import Banner from "./components/Banner";

const App = () => {
  const [courses, loading, error] = useData(); 

  if (loading) return <h1>Loading Schedule...</h1>;
  if (error) return <h1>Error loading data: {error.message}</h1>;
  if (!courses || typeof courses !== "object") return <h1>No courses available.</h1>;

  console.log("Extracted Courses:", courses);

  return (
    <div className="container">
      <Banner title="CS Courses for 2018-2019" />
      <CourseList courses={courses} />
    </div>
  );
};

export default App;



















    

