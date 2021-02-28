import { config, createSchema } from '@keystone-next/keystone/schema';
const databaseURL = process.env.DATABASE_URL;
import 'dotenv/config';

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
    }),
    ui: {
        // TODO change this for roles
        isAccessAllowed: () => true
    },
    // TODO: add session values here
})