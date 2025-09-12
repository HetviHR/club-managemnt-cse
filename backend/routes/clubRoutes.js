import express from "express";
import { createRequest, updateRequestStatus, getRequests, getClubs } from "../controllers/clubController.js";

const router = express.Router();

router.post("/request", createRequest);
router.put("/request/:requestId", updateRequestStatus);
router.get("/requests", getRequests);
router.get("/", getClubs);

export default router;
