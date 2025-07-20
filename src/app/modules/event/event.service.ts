import { IEvent } from "./event.interface";
import { EventModel } from "./event.model";

const createEventintoDB = async (eventData: IEvent) => {
   const result = await EventModel.create(eventData);
   return result;
    
}

const getEventsFromDB = async () => {
    const events = await EventModel.find();
    return events;
}

export const EventServices = {
    createEventintoDB,
    getEventsFromDB,
}