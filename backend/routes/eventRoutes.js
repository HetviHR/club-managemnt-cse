import express from "express";
import { createEvent, getEvents, updateEvent, deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);

export default router;
