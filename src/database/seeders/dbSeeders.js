import { userSeeder } from "./user.seeder.js";

(async () => { 
    console.log("Starting seeders...")
    await userSeeder();
})();