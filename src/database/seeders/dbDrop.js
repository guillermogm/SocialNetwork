import mongoose from "mongoose";
import "dotenv/config";
import { dbConnection, dbDisconnection } from "../db.js";

(async () => {
    try {
      await dbConnection();
      const dbName = 'social_network';
      await mongoose.connection.dropDatabase(dbName);
      console.log(`Database ${dbName} dropped successfully`);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      await dbDisconnection();
    }
  })();