import Axios from "axios";
import { GET_PROJECT_SUCCESS, GET_PROJECT_ERROR } from "./actionTypes";

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get("/api/addproject");
      dispatch({ type: GET_PROJECT_SUCCESS, payload: result.data.projects });
    } catch (error) {
      dispatch({ type: GET_PROJECT_ERROR, error });
    }
  };
};

export const addProjeect = (addproject) => {
  const contentType = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  let formData = new FormData();
  formData.append("Project_Name", addproject.Prject_Name);
  formData.append("Team_Lead", addproject.Team_Lead);
  formData.append("Technology", addproject.Technology);
  formData.append("Client", addproject.Client);

  return async (dispatch) => {
    try {
      const result = await Axios.post(
        "/api/projects/addproject",
        formData,
        contentType
      );
      dispatch({ type: GET_PROJECT_SUCCESS, payload: result.data.PROJECTS });
    } catch (error) {
      dispatch({ type: GET_PROJECT_ERROR, error });
    }
  };
};

