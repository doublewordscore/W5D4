function Student(fname, lname, courses = []) {
  this.fname = fname;
  this.lname = lname;
  this.courses = courses;
}

Student.prototype.name = function() {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function(course) {
  this.courses.push(course);
  course.enroll(this);
};

// Student.prototype.courseLoad = function() {
//   courses = {};
//   this.courses.forEach((course) => {
//     courses[course.name] = course.credits;
//   });
// };

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
}
