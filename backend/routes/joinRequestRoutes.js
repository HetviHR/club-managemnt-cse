import express from "express";
import { createJoinRequest, getJoinRequestsByClub, updateJoinRequestStatus } from "../controllers/joinRequestController.js";

const router = express.Router();

router.post("/join-request", createJoinRequest);
router.get("/join-requests/:clubId", getJoinRequestsByClub);
router.patch("/join-request/:requestId", updateJoinRequestStatus);

export default router;


