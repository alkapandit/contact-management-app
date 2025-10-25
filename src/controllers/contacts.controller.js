import { ApiErrors } from "../utils/ApiErrors.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

export const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

export const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get contact by Id" });
});

export const createContact = asyncHandler(async (req, res, next) => {
  console.log("req body: ", req.body);
  const { name, email, phone } = req?.body;
  if (!name || !email || !phone) {
    return next(new ApiErrors("All fields are mandatory!", 400));
  }
  res.status(200).json({ message: "Create Contact" });
});

export const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update contact" });
});

export const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Remove contact" });
});
