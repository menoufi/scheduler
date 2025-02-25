const meetsPat = /^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/;

export const getCourseTerm = (course) => course.term;
export const getCourseNumber = (course) => course.number;

export const timeParts = (meets) => {
  const [match, days, hh1, mm1, hh2, mm2] = meetsPat.exec(meets) || [];
  return !match
    ? {}
    : {
        days,
        hours: {
          start: parseInt(hh1) * 60 + parseInt(mm1),
          end: parseInt(hh2) * 60 + parseInt(mm2),
        },
      };
};

const days = ["M", "Tu", "W", "Th", "F"];

const daysOverlap = (days1, days2) =>
  days.some((day) => days1.includes(day) && days2.includes(day));

const hoursOverlap = (hours1, hours2) =>
  Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end);

const timeConflict = (course1, course2) =>
  daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours);

export const hasConflict = (course, selected) =>
  selected.some((selectedCourse) => timeConflict(course, selectedCourse));










  
