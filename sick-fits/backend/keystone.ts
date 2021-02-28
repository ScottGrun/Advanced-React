import { config, createSchema } from '@keystone-next/keystone/schema';
import {User} from './schemas/User';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,// Session valid duration
    secret: process.env.COOKIE_SECRET,
}

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL
        // TODO: Add data seeding here
    },
    lists: createSchema({
        // Schema items here
        User
    }),
    ui: {
        // TODO change this for roles
        isAccessAllowed: () => true
    },
    // TODO: add session values here
})