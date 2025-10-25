import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts.controller.js";

const router = express.Router();

// router.get("/", getAllContacts);
// router.post("/", createContact);
// router.put("/:id", updateContact);
// router.get("/:id", getContactById);
// router.delete("/:id", deleteContact);

router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContactById).delete(deleteContact);

export default router;
