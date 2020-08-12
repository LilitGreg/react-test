import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import Route from "react-router-dom";

function App() {
  //   function getPage() {
  //     const route = window.location.pathname;
  //     if (route === "/courses") return <CoursesPage />;
  //     if (route === "/about") return <AboutPage />;
  //     else return <HomePage />;
  //   }
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
      {/* {getPage()} */}
    </div>
  );
}

export default App;
