import mongoose from "mongoose";
import "dotenv/config";
import User from "../../entities/users/users.model.js";
import bcrypt from "bcrypt";

export const userSeeder = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {});

		const users = [
			{
				_id: "5f8d0c0c9b8b4b2e8c2e2b7c",
				email: "user@user.com",
				password: bcrypt.hashSync("123456789", parseInt(process.env.SALT_ROUNDS)),
			},
			{
				_id: "5f8d0c0c9b8b4b2e8c2e2b71",
				email: "admin@admin.com",
				password: bcrypt.hashSync("123456789",  parseInt(process.env.SALT_ROUNDS)),
				role: "admin",
			},
			{
				_id: "5f8d0c0c9b8b4b2e8c2e2b72",
				email: "superadmin@superadmin.com",
				password: bcrypt.hashSync("123456789",  parseInt(process.env.SALT_ROUNDS)),
				role: "super_admin",
			},
		];

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
