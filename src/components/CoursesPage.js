import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";

//import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    //getCourses().then((_courses) => this.setCourses(_courses));
  }, []);
  //  state = {
  //     courses: [
  //       { id: "1", title: "title1", authorId: "1", category: "poem" },
  //       { id: "2", title: "title2", authorId: "2", category: "poem" },
  //     ],
  //   };
  //// for class component
  //   componentDidMount() {
  //     //getCourses().then((courses) => this.setState({ courses: courses })); //
  //   }

  return (
    <>
      <h2> Courses </h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
