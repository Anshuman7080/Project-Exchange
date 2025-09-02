import { db } from "@/config/db";


export async function POST(req) {
  try {
    const { id, name, email, image, bio } = await req.json();

    const [author] = await db.query(
      "SELECT * FROM AUTHORS WHERE ID = ?",
      [id]
    );

    if (author.length > 0) {
      return new Response(JSON.stringify({
        message: "User is already present in the database"
      }), { status: 200 });
    }

    await db.query(
      `INSERT INTO AUTHORS (ID, NAME, USERNAME, EMAIL, IMAGE, BIO)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, name, name, email, image, bio]
    );

    return new Response(JSON.stringify({
      message: "User entry successfully created in DB"
    }), { status: 201 });

  } catch (error) {
    console.error("Error creating user entry in DB:", error);
    return new Response(JSON.stringify({
      message: "Internal server error"
    }), { status: 500 });
  }
}
