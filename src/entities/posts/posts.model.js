import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        },
        user: {
            type: Schema.Types.ObjectId,
            path: "User",
            required: true
        },
        likes: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model("Post", postSchema)

export default Post