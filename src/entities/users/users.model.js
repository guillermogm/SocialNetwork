import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'super_admin'],
            default: 'user',
            require: true
        },
        followers: [{
            type: Schema.Types.ObjectId,
            ref: "user"
        }],
        following: [{
            type: Schema.Types.ObjectId,
            ref: "user"
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model("user", userSchema)

export default User