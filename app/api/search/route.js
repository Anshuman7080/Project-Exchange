import { db } from "@/config/db";

export async function GET(req) {
  try{
// console.log("coming in get page");
const { searchParams } = new URL(req.url);
  const query = searchParams.get("query")?.trim(); 

  const connection = await db.getConnection();

  let rows;

  if (!query) {
   
    [rows] = await connection.query(
      `
      SELECT PROJECT.*, AUTHORS.NAME AS AUTHOR_NAME
      FROM PROJECT
      JOIN AUTHORS ON PROJECT.AUTHOR_ID = AUTHORS.ID
      ORDER BY PROJECT.CREATED_AT DESC
      `
    );
  } else {
  
    [rows] = await connection.query(
      `
      SELECT PROJECT.*, AUTHORS.NAME AS AUTHOR_NAME
      FROM PROJECT
      JOIN AUTHORS ON PROJECT.AUTHOR_ID = AUTHORS.ID
      WHERE PROJECT.TITLE LIKE ?
         OR PROJECT.CATEGORY LIKE ?
         OR AUTHORS.NAME LIKE ?
      ORDER BY PROJECT.CREATED_AT DESC
      `,
      [`%${query}%`, `%${query}%`, `%${query}%`]
    );
  }

  await connection.release();

  // console.log("all projects are",rows);
  return Response.json(rows);

  }
  catch(error){
    console.error("Error fetching projects:", error);
    return new Response(JSON.stringify({
      message: "Internal server error"
    }), { status: 500 });
  }
}
