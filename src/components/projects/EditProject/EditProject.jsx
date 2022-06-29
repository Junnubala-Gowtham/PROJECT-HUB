import React from "react";
import { Link } from "react-router-dom";

let EditProject = () => {
  return (
    <React.Fragment>
      <section className="add-project p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Project Details</p>
              <p className="fst-italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium laboriosam optio perspiciatis impedit mollitia
                corporis pariatur, ipsa dignissimos animi et quidem aperiam a
                amet dolores repellat aspernatur odio sapiente consequuntur.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Team Lead"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Technology"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Skill"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Client"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Progress"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                  />

                  <Link to={"/projects/list"} className="btn btn-dark ms-2">
                    Cancle
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src="data:image/png;base64,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"
                alt="img"
                className="project-img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditProject;
