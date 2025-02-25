import { useLocation } from "react-router-dom";
import { useForm } from "../utilities/useForm";
import { timeParts } from "../utilities/times";
import { setData } from "../utilities/firebase";

const isValidMeets = (meets) => {
  const parts = timeParts(meets);
  return meets === "" || (parts.days && !isNaN(parts.hours?.start) && !isNaN(parts.hours?.end));
};

const validateCourseData = (key, val) => {
  switch (key) {
    case "title":
      return /(^$|\w\w)/.test(val) ? "" : "Must be at least two characters";
    case "meets":
      return isValidMeets(val) ? "" : "Format: days hh:mm-hh:mm";
    default:
      return "";
  }
};

const submit = async (values) => {
  if (window.confirm(`Change ${values.id} to ${values.title}: ${values.meets}`)) {
    try {
      await setData(`schedule/courses/${values.id}/`, values);
      alert("Course updated successfully!");
    } catch (error) {
      alert(`Error updating course: ${error.message}`);
    }
  }
};

const EditForm = () => {
  const { state: course } = useLocation();
  const [errors, handleSubmit] = useForm(validateCourseData, submit);

  return (
    <form onSubmit={handleSubmit} noValidate className={errors ? "was-validated" : null}>
      <input type="hidden" name="id" value={course.id} />
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Course Title</label>
        <input className="form-control" id="title" name="title" defaultValue={course.title} />
        <div className="invalid-feedback">{errors?.title}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="meets" className="form-label">Meeting Time</label>
        <input className="form-control" id="meets" name="meets" defaultValue={course.meets} />
        <div className="invalid-feedback">{errors?.meets}</div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EditForm;

