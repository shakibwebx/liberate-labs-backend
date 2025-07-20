import { IEvent } from "./event.interface";
import { Schema, model } from 'mongoose';

const eventSchema = new Schema<IEvent>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    notes: { type: String },
    category: { type: String, enum: ["Work", "Personal", "Other"], required: true },
    archived: { type: Boolean, default: false },
});

export const EventModel = model<IEvent>("Event", eventSchema);