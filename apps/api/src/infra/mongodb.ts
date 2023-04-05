import mongoose from "mongoose";
import { Logger } from "../utils/logger";

export const connectToDatabase = async (): Promise<void> => {
    mongoose.connection.on("connected", () => {
        Logger.info("Connected to database");
    })
        .on("error", (error) => {
            Logger.error("Error connecting to database", error);
        })
        .on("close", () => {
            Logger.info("Database connection closed");
        })

    mongoose.set("strictQuery", true);
    const MONGO_URI = process.env.MONGO_URI;
    
    if (MONGO_URI) mongoose.connect(MONGO_URI);
    else Logger.error("No database connection string provided");
}