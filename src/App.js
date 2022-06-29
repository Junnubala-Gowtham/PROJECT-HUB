import React from "react";
// import React, { useEffect, useState } from "react";




import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProjectList from "./components/projects/ProjectList/ProjectList";
import ViewProject from "./components/projects/ViewProject/ViewProject";
import EditProject from "./components/projects/EditProject/EditProject";
import Spinner from "./components/Spinner/Spinner";
import AddProjectForm from "./components/projects/AddProject/AddProject";

let App = () => {
  ////////////////////////////////////////////
  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  ////////////////////////////////////////////
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/projects/list"} />} />
        <Route path={"/projects/list"} element={<ProjectList />} />
        <Route path={"/projects/add"} element={<AddProjectForm />} />
        <Route path={"/projects/view/:projectId"} element={<ViewProject />} />
        <Route path={"/projects/edit/:projectId"} element={<EditProject />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
