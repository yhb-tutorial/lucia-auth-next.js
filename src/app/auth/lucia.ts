// auth/lucia.ts
import { lucia } from "lucia";
import { nextjs_future } from "lucia/middleware";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import { User, Key, Session } from "../lib/models";
import connectDB from "../lib/db";

connectDB();

export const auth = lucia({
    env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
    middleware: nextjs_future(),
    sessionCookie: {
        expires: false,
    },
    adapter: mongoose({
        User,
        Key,
        Session,
    }),
});

export type Auth = typeof auth;