import { Contact } from "../models/contact.model.js";
import { ApiErrors } from "../utils/ApiErrors.utils.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  const response = new ApiResponse(
    200,
    contacts,
    contacts.length ? "Contacts fetched successfully" : "No contacts found"
  );
  res.status(200).json(response);
});

export const getContactById = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return next(new ApiErrors("Record not found!", 404));
  }
  const response = new ApiResponse(
    200,
    contact,
    "Contact fetched successfully"
  );
  res.status(200).json(response);
});

export const createContact = asyncHandler(async (req, res, next) => {
  // console.log("req body: ", req.body);
  const { name, email, phone } = req?.body;
  if (!name || !email || !phone) {
    return next(new ApiErrors("All fields are mandatory!", 400));
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  const response = new ApiResponse(
    201,
    contact,
    "Contact created successfully"
  );
  res.status(200).json(response);
});

export const updateContact = asyncHandler(async (req, res, next) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true } // runValidators ensures schema validation
  );
  if (!updatedContact) {
    return next(new ApiErrors("Record not found!", 404));
  }

  const response = new ApiResponse(
    201,
    updatedContact,
    "Contact updated successfully"
  );
  res.status(200).json(response);
});

export const deleteContact = asyncHandler(async (req, res, next) => {
  const deletedContact = await Contact.findByIdAndDelete(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!deletedContact) {
    return next(new ApiErrors("Record not found!", 404));
  }
  const response = new ApiResponse(
    201,
    deletedContact,
    "Contact deleted successfully"
  );
  res.status(200).json(response);
});
