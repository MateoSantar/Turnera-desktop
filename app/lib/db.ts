import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_KEY,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
  });
  return connection;
}
