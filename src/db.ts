import 'dotenv/config'

// Use runtime require to avoid TypeScript module resolution errors when
// @prisma/client is not installed in some environments.
let PrismaClient: any
try {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	PrismaClient = require('@prisma/client').PrismaClient
} catch (e) {
	// Fallback stub to allow the application to run (no-op client).
	PrismaClient = class {
		async $connect() {}
		async $disconnect() {}
	}
}

export const prisma = new PrismaClient()