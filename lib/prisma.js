import {prismaclient} from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Neonconfig } from '@neondatabase/serverless';

import ws from 'ws';
neonconfig.websocketconstructor = ws;

neonconfig.poolQueryviaFetch = true

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaNeon({connectionString });
const prisma = global.prisma || new prismaclient({adapter});

if (process.env.NODE_ENV !== 'development') global.prisma = prisma;

export default prisma;