import { Types } from 'mongoose';
import { Event, EventModel } from './EventModel';

export const findEventById = async (id: Types.ObjectId | string) => {
  return await EventModel.findById(id);
};

export const CreateEvent = async (event: Partial<Event>) => {
  const newEvent = await EventModel.create(event);
  
  if (!newEvent) throw new Error('Error creating event');

  return newEvent;
};