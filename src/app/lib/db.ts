import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            (process.env.MONGO_URI as string) || "mongodb://localhost:27017/lucia"
        );

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;