import mongoose, { Schema } from 'mongoose';

export interface Event {
    readonly id: mongoose.Types.ObjectId;
    _id: string;
    content: string;
}


const EventSchema: Schema = new Schema(
    {   
        content: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        }
    }
)

export const EventModel = mongoose.model<Event>('Event', EventSchema);