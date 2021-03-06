import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { createAuth } from '@keystone-next/auth';
import 'dotenv/config';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'
const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,// Session valid duration
    secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password']
        // TODO: Add in inital roles
    }
})

export default withAuth(config({
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
        //Show UI for only authed users
        isAccessAllowed: ({ session }) => {
            console.log(session);
            return !!session?.data;
        }
    },
    session: withItemData(statelessSessions(sessionConfig), {
        // Graphql query 
        User: 'id'
    })
}));