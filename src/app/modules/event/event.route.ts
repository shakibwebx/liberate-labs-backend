import express from "express";
import { createEvent, getEvents, archiveEvent, deleteEvent } from "./event.controller";

const router = express.Router();

router.post("/events", createEvent);
router.get("/events", getEvents);
router.put("/events/:id", archiveEvent);
router.delete("/events/:id", deleteEvent);

export const EventRoutes = router;