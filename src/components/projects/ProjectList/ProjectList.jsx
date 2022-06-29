import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectsServices } from "../../../services/projectsService";
import Spinner from "../../Spinner/Spinner";

let ProjectList = () => {
  //   let [state,setState] = useState(initialState:{
  //       loading: false,
  //       projects:[],
  //       errorMessage : ""
  //   });

  //   useEffect(effect: async() =>{

  //   }, inputs:[])
  ////////////////////////////////////////////////////////
  const [backendData, setBackendData] = useState();

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackendData(data);
      });
  }, []);
  ///////////////////////////////////////////////////////

  // <div>
  //   {typeof backendData.users === "undefined" ? (
  //     <p>Loading...</p>
  //   ) : (
  //     backendData.users.map((user, i) => <p key={i}>{user}</p>)
  //   )}
  // </div>;

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(projects)}</pre> */}
      <section className="project-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Add Project
                  <Link to={"/projects/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum voluptatum veniam voluptatem autem eligendi repudiandae
                  quam! Soluta temporibus cum odit enim non qui itaque nesciunt
                  quisquam voluptate facere, porro aliquam!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Projects"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            {backendData?.projects.length > 0 &&
              backendData?.projects?.map((item) => {
                return (
                  <div className="col-md-6" key={item}>
                    <div className="card my-2">
                      <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                          <div className="col-md-4">
                            <img
                              src={item.pic}
                              alt="img"
                              className="project-img"
                            />
                          </div>

                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Project Name:</span>
                                <span className="">{item.name}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Technology:</span>
                                <span className="">{item.technology}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Skill:</span>
                                <span className="">{item.skill}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Client:</span>
                                <span className="">{item.client}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-1 d-flex flex-column align-items-center">
                            <Link
                              to={"/projects/view/:projectId"}
                              className="btn btn-warning my-1"
                            >
                              <i className="fa fa-eye" />
                            </Link>
                            <Link
                              to={"/projects/edit/:projectId"}
                              className="btn btn-primary my-1"
                            >
                              <i className="fa fa-pen" />
                            </Link>
                            <button className="btn btn-danger my-1">
                              <i className="fa fa-trash" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                ///////////////////Braces Here/////////////////down
                // return brace);
              })}
          </div>
        </div>
      </section>
      <div>
        {/* {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.map((users, i) => <p key={i}>{users}</p>)
        )} */}

        {/* {typeof backendData.users === "undefined" ? (
          <Spinner />
        ) : ( */}
        {/* {backendData?.projects?.map((item) => {
          return Object.keys(item).map((key, i) => (
            <div key={i}>
              <span>{key}</span>
              <span>{item[key]}</span>
            </div>
          ));
        })} */}
      </div>
    </React.Fragment>
  );
};

export default ProjectList;
