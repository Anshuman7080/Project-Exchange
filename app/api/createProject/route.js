import { auth } from "@/auth";
import { db } from "@/config/db";
import slugify from "slugify";

export async function POST(req) {
  const session = await auth();
  const author_id = session?.id;

  try {
    const { title, description, category, link, details } = await req.json();
    const slug = slugify(title);

  
    const [existing] = await db.query(
      `SELECT * FROM PROJECT WHERE SLUG = ? AND AUTHOR_ID = ?`,
      [slug, author_id]
    );

    if (existing.length > 0) {
      return Response.json({
        success: false,
        message: "Project already published",
        project: existing[0],
      });
    }

   
    await db.query(
      `INSERT INTO PROJECT 
        (SLUG, TITLE, AUTHOR_ID, DESCRIPTION, CATEGORY, IMAGE, DETAILS) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [slug, title, author_id, description, category, link, details]
    );

    const [project] = await db.query(
      `SELECT * FROM PROJECT WHERE SLUG = ?`,
      [slug]
    );

    return Response.json({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error("Error in creating the project:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to create the project",
      }
    );
  }
}
