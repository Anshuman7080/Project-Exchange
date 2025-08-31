import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "8303Aa@@",
  database: "ProjectHub",
});

export async function checkDBConnection() {
  try {
    const conn = await db.getConnection();
 
    conn.release();
    return true;
  } catch {
    return false;
  }

}
