import { Client } from "pg";

async function query(query) {
  const client = new Client({
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  const result = await client.query(query);
  await client.end();
  return result;
}

export default {
  query: query,
};
