import { postSeeder } from "./post.seeder.js";
import { userSeeder } from "./user.seeder.js";

(async () => { 
    console.log("Starting seeders...")
    await userSeeder();
    await postSeeder();
})();