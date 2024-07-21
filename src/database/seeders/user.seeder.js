import mongoose from "mongoose";
import "dotenv/config";
import User from "../../entities/users/users.model.js";
import bcrypt from "bcrypt";

export const userSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});

        const users = [
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Emily Chen",
                email: "emilychen@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Oliver Brown",
                email: "oliverbrown@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Ava Lee",
                email: "avalee@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Ethan Hall",
                email: "ethanhall@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Lily Patel",
                email: "lilypatel@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Logan Brooks",
                email: "loganbrooks@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Sophia Garcia",
                email: "sophiagarcia@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Alexander Martin",
                email: "alexandermartin@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Mia Davis",
                email: "miadavis@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                name: "Benjamin White",
                email: "benjaminwhite@email.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                followers: [],
                following: []
            },
            {
                _id: "5f8d0c0c9b8b4b2e8c2e2b7c",
                name: "user",
                email: "user@user.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
            },
            {
                _id: "5f8d0c0c9b8b4b2e8c2e2b71",
                name: "admin",
                email: "admin@admin.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                role: "admin",
            },
            {
                _id: "5f8d0c0c9b8b4b2e8c2e2b72",
                name: "super_admin",
                email: "superadmin@superadmin.com",
                password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
                role: "super_admin",
            }
        ];

        users[0].followers = [users[1]._id, users[3]._id, users[5]._id];
        users[0].following = [];
        
        users[1].followers = [users[0]._id, users[4]._id, users[7]._id];
        users[1].following = [users[0]._id];
        
        users[2].followers = [users[4]._id, users[6]._id];
        users[2].following = [users[3]._id, users[5]._id, users[8]._id];
        
        users[3].followers = [users[0]._id, users[2]._id];
        users[3].following = [users[2]._id, users[6]._id, users[9]._id];
        
        users[4].followers = [users[1]._id, users[2]._id];
        users[4].following = [users[1]._id, users[7]._id];
        
        users[5].followers = [users[0]._id, users[2]._id];
        users[5].following = [users[0]._id, users[8]._id];
        
        users[6].followers = [users[2]._id, users[3]._id];
        users[6].following = [users[3]._id, users[9]._id];
        
        users[7].followers = [users[9]._id, users[8]._id];
        users[7].following = [];
        
        users[8].followers = [];
        users[8].following = [users[7]._id, users[9]._id];
        
        users[9].followers = [users[8]._id, users[3]._id];
        users[9].following = [users[7]._id, users[3]._id];

		await User.insertMany(users);

        console.log("============================");
        console.log("Users seeder successfully");
        console.log("============================");
    } catch (error) {
        console.log("============================");
        console.log(error);
        console.log("============================");
    } finally {
        await mongoose.connection.close();
    }
};
