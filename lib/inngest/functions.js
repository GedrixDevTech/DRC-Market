import { inngest } from "./client";
import prisma from "lib/prisma";
export const syncusercreation = inngest.createFunction(
    { Id: 'sync-user-creation'},
    {event: 'clerk/user-created'},
    async ({ event }) => {
        // Function implementation
        const { data } = event
        await prisma.user.create({
            data: {
                id: data.id,
                email: data.email_addresses[0].email_address,
                first_name: data.first_name,
                name: `${data.first_name} ${data.last_name}`,
                image: data.image_url,
            }
        })
    }
)
//inngest function to update user data in database
export const syncuserupdate = inngest.createFunction(
    { Id: 'sync-user-update'},
    {event: 'clerk/user-updated'},
    async ({ event }) => {
        const { data } = event
        await prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                email: data.email_addresses[0].email_address,
                first_name: data.first_name,
                name: `${data.first_name} ${data.last_name}`,
                image: data.image_url,
            }
        })
    }
)

//inngest Function to delete user from database 
export const syncUserDeletion = inngest.createFunction(
    { id: "sync-user-delete" },
    { event: "clerk/user-deleted" },
    async ({ event }) => {
        const { data } = event;
        await prisma.user.delete({
            where: { id: data.id }
        });
    }
)