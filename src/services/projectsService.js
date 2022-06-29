import axios from "axios";

export class projectsServices {
  static serverURL = "http://localhost:9000";

  static getAllProjects() {
    let dataURL = `${this.serverURL}/projects`;
    return axios.get(dataURL);
  }
}
