import React from "react";
import Joi from "@hapi/joi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import "../../Newproject.css";
import { AddProject } from "../../actions/moviesAction";
import { projectSchema } from "./schema";

// let AddProject = () => {



  class AddProjectForm extends React.Component {
    state = {
      data: {
        Project_Name: "",
        Team_Lead: "",
        Technology: "",
        Client: "",
        // image: null,
      },
      genres: [],
      errors: {},
    };
  
    handleChange = ({ currentTarget: input }) => {
      const data = { ...this.state.data };
      data[input.name] = input.value;
      this.setState({ data });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      //TODO: Validate property
      const { error } = Joi.validate(this.state, projectSchema);
      this.setState({ errors: error });
      if (!error) this.props.addProject(this.state.data);
    };
  
    // uploadImage = (e) => {
    //   if (e.target.files[0]) {
    //     const data = { ...this.state.data };
    //     data.image = e.target.files[0];
    //     this.setState({ data });
    //   }
    // };
  
    render() {
      const { errors, data } = this.state;
      const { Project_Name, Team_Lead, Technology ,Client} = data;
      const { genres } = this.props;





  return (
    <React.Fragment>
            <div className="entireForm">
            <h1 className="header">Add a new project</h1>
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">

                <div>
                  <label> Project_Name </label><br />
                  <input type="text" value={Project_Name} placeholder="Enter Project Name..." onChange={this.handleChange}/>
                </div>
                
                <div>
                  <label> Team_Lead </label><br />
                  <input type="text" value={Team_Lead}  placeholder="Enter Lead Name..." onChange={this.handleChange} />
                </div>
                {/* <div>
                  <label> System Architecture </label><br />
                  <input type="text" placeholder="Image URL..." />
                </div> */}
                <div>
                  <label> Technology </label><br />
                  <input type="text" value={Technology} placeholder="Technology..." onChange={this.handleChange} />
                </div>
                {/* <div>
                  <label> Project Details </label> <br />
                  <textarea  placeholder="Enter Project Details..." />
                </div> */}
                {/* <div>
                  <label> Project Objectives </label> <br />
                  <textarea  placeholder="Enter Project Objectives..." />
                </div> */}
                <div>
                  <label> Client</label><br />
                  <input type="text" value={Client}  placeholder="Enter Client Name..." onChange={this.handleChange} />
                </div>
                
                
                
                
                
                
                <div>
                  <input type="submit" className="submit" value="Create" />
                  {/* <Link to={"/projects/list"} className="btn btn-dark" />
                    Close */}
                  <Link to={"/projects/list"} className="cancel">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
    </React.Fragment>
  );
                  }
                }
// };


const mapDispatchToProps = (dipatch) => {
  return {
    addProject: (project) => dipatch(addProject(project)),
  };
};

const mapStateToProps = (state) => {
  return {
    genres: state.genre.genres,
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm);

