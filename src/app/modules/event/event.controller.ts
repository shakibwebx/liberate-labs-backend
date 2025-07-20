import { Request, Response } from "express";
import { IEvent } from "./event.interface";
import { events } from "./event.data";
import { categorizeEvent, isValidDate, isValidTime } from "./event.utils";
import { v4 as uuidv4 } from "uuid";

// POST /events
export const createEvent = (req: Request, res: Response) => {
    const { title, date, time, notes, archived } = req.body;

    if (!title || typeof title !== "string") {
        return res.status(400).json({ success: false, message: "Title is required and must be a string." });
    }

    if (!date || !isValidDate(date)) {
        return res.status(400).json({ success: false, message: "Valid date (YYYY-MM-DD) is required." });
    }

    if (!time || !isValidTime(time)) {
        return res.status(400).json({ success: false, message: "Valid time (HH:MM) is required." });
    }

    const category = categorizeEvent(title, notes);

    const newEvent: IEvent = {
        id: uuidv4(),
        title,
        date,
        time,
        notes,
        category,
        archived: archived ?? false,
    };

    events.push(newEvent);

    res.status(201).json({
        success: true,
        message: "Event created successfully.",
        data: newEvent,
    });
};

// GET /events
export const getEvents = (_req: Request, res: Response) => {
    const sortedEvents = events.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA.getTime() - dateB.getTime();
    });

    res.status(200).json({
        success: true,
        message: "Events retrieved successfully.",
        data: sortedEvents,
    });
};

// PUT /events/:id
export const archiveEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const event = events.find(e => e.id === id);

    if (!event) {
        return res.status(404).json({ success: false, message: "Event not found." });
    }

    event.archived = true;

    res.status(200).json({
        success: true,
        message: "Event archived successfully.",
        data: event,
    });
};

// DELETE /events/:id
export const deleteEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = events.findIndex(e => e.id === id);

    if (index === -1) {
        return res.status(404).json({ success: false, message: "Event not found." });
    }

    const deletedEvent = events.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Event deleted successfully.",
        data: deletedEvent,
    });
};
