import { constant } from "../constants/response.constant.js";

export const errorHandler = (err, req, res, next) => {
  console.log("Error: ", err.message);

  const response = null;

  // Only include stack in development
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }
  switch (res.statusCode) {
    case constant?.FORBIDDEN:
      response = {
        success: false,
        status: err.status || "error",
        message: err.message || "Forbidden!",
      };
      break;
    case constant?.NOT_FOUND:
      response = {
        success: false,
        status: err.status || "error",
        message: err.message || "Not Found!",
      };
      break;
    case constant?.UNAUTHORIZED:
      response = {
        success: false,
        status: err.status || "error",
        message: err.message || "Unauthorized!",
      };
      break;
    case constant?.VALIDATION_ERROR:
      response = {
        success: false,
        status: err.status || "error",
        message: err.message || "Validation Failed!",
      };
      break;
    case constant?.SERVER_ERROR:
      response = {
        success: false,
        status: err.status || "error",
        message: err.message || "Server Error!",
      };
      break;
    default:
      console.log("No Error, All Good!");
      break;
  }
  res.status(err.statusCode || 500).json(response);
};
