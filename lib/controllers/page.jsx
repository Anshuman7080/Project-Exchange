import { db } from "@/config/db";

export default async function fetchProjectFromQueries(query) {
  const connection = await db.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT * FROM PROJECT WHERE TITLE LIKE ?",
      [`%${query}%`]
    );
    console.log("rows are", rows);
    return rows;
  } catch (error) {
    console.error("Error searching projects:", error);
    throw error;
  } finally {
    connection.release();
  }
}
