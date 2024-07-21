import mongoose from "mongoose";
import "dotenv/config";
import Post from "../../entities/posts/posts.model.js";

export const postSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});

        const posts = [
            {
                _id: new mongoose.Types.ObjectId(),
                title: "First Post",
                content: "This is my first post in this site.",
                user:"627351f43a5f615a3c123456",
                likes:[]
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Second Post",
                content: "This is my second post in this site.",
                user: "627351f43a5f615a3c123789",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Third Post",
                content: "This is my third post in this site.",
                user: "627351f43a5f615a3c123012",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Fourth Post",
                content: "This is my fourth post in this site.",
                user: "627351f43a5f615a3c123345",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Fifth Post",
                content: "This is my fifth post in this site.",
                user: "627351f43a5f615a3c123678",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Sixth Post",
                content: "This is my sixth post in this site.",
                user: "627351f43a5f615a3c123901",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Seventh Post",
                content: "This is my seventh post in this site.",
                user: "627351f43a5f615a3c123234",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Eighth Post",
                content: "This is my eighth post in this site.",
                user: "627351f43a5f615a3c123567",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Ninth Post",
                content: "This is my ninth post in this site.",
                user: "627351f43a5f615a3c123890",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Tenth Post",
                content: "This is my tenth post in this site.",
                user: "627351f43a5f615a3c123111",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Eleventh Post",
                content: "This is my eleventh post in this site.",
                user: "627351f43a5f615a3c123222",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Twelfth Post",
                content: "This is my twelfth post in this site.",
                user: "627351f43a5f615a3c123333",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Thirteenth Post",
                content: "This is my thirteenth post in this site.",
                user: "627351f43a5f615a3c123444",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Fourteenth Post",
                content: "This is my fourteenth post in this site.",
                user: "627351f43a5f615a3c123555",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Fifteenth Post",
                content: "This is my fifteenth post in this site.",
                user: "627351f43a5f615a3c123666",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Sixteenth Post",
                content: "This is my sixteenth post in this site.",
                user: "627351f43a5f615a3c123777",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Seventeenth Post",
                content: "This is my seventeenth post in this site.",
                user: "627351f43a5f615a3c123888",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Eighteenth Post",
                content: "This is my Eighteenth post in this site.",
                user: "627351f43a5f615a3c123456",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Nineteenth Post",
                content: "This is my Nineteenth post in this site.",
                user: "627351f43a5f615a3c456789",
                likes: []
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: "Twentieth Post",
                content: "This is my twentieth post in this site.",
                user: "627351f43a5f615a3c555555",
                likes: []
              },
        ]

        posts[0].likes=[posts[8].user, posts[18].user]
        posts[1].likes=[posts[14].user, posts[5].user]
        posts[2].likes=[posts[11].user, posts[7].user]
        posts[3].likes=[posts[16].user, posts[3].user]
        posts[4].likes=[posts[9].user, posts[1].user]
        posts[5].likes=[posts[13].user, posts[6].user]
        posts[6].likes=[posts[10].user, posts[2].user]
        posts[7].likes=[posts[15].user, posts[4].user]
        posts[8].likes=[posts[12].user, posts[9].user]
        posts[9].likes=[posts[17].user, posts[8].user]
        posts[10].likes=[posts[19].user, posts[11].user]
        posts[11].likes=[posts[6].user, posts[13].user]
        posts[12].likes=[posts[5].user, posts[14].user]
        posts[13].likes=[posts[2].user, posts[16].user]
        posts[14].likes=[posts[1].user, posts[17].user]
        posts[15].likes=[posts[4].user, posts[18].user]
        posts[16].likes=[posts[3].user, posts[19].user]
        posts[17].likes=[posts[7].user, posts[10].user]
        posts[18].likes=[posts[9].user, posts[12].user]
        posts[19].likes=[posts[11].user, posts[15].user]

        await Post.insertMany(posts);

        console.log("============================");
        console.log("Posts seeder successfully");
        console.log("============================");
    } catch (error) {
        console.log("============================");
        console.log(error);
        console.log("============================");
    } finally {
        await mongoose.connection.close();
    }
};