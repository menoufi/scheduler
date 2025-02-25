const toggle = (item, list) =>
  list.includes(item) ? list.filter(i => i !== item) : [item, ...list];

const Course = ({ course, selected, setSelected }) => {
  const isSelected = selected.includes(course);
  
  const style = {
    backgroundColor: isSelected ? "lightgreen" : "white",
  };

  return (
    <div
      className="card m-1 p-2"
      style={style}
      onClick={() => setSelected(toggle(course, selected))}
    >
      <div className="card-body">
        <div className="card-title">{course.term} CS {course.number}</div>
        <div className="card-text">{course.title}</div>
        <div className="card-text">{course.meets}</div>
      </div>
    </div>
  );
};

export default Course;





















