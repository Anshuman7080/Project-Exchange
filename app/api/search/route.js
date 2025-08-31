import { db } from "@/config/db";

export async function GET(req) {
    console.log("coming here");
  const { searchParams } = new URL(req.url);
  console.log("req is ",req.url);
  console.log("req url", searchParams)
  const query = searchParams.get("query");

  const connection = await db.getConnection();
  const [rows] = await connection.query(
    "SELECT * FROM PROJECT WHERE TITLE LIKE ?",
    [`%${query}%`]
  );
  console.log("rows are", rows);
  await connection.release();

  return Response.json(rows);
}
