import Joi from "@hapi/joi";

export const projectSchema = {
  id: Joi.string(),
  Project_Name: Joi.string().required().label("Project_Name"),
  Team_lead: Joi.string().required().label("Team_Lead"),
  Technology: Joi.string().required().label("Technology"),
   Clinet: Joi.string().required().label("Client"),
//   image: Joi.object().allow(null).label("Cover Image"),
};
