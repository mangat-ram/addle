import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
dotenv.config({path: '.env'});

if(!process.env.DATABASE_URL){
  console.log('No database URL.');
}

const client = postgres(process.env.DATABASE_URL as string, {max:1})
const db = drizzle(client, { schema });
const migrateDb = async () => {
  console.log("Migrating Client.");
  await migrateDb
  
}

export default db;