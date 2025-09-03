import { db } from "@/config/db";


export async function GET(req){
    
    try{
        const searchParams=new URLSearchParams(req.url.split("?")[1]);
        const id = searchParams.get("ID");

const [rows] = await db.query(`
  SELECT PROJECT.*, AUTHORS.NAME AS AUTHOR_NAME 
  FROM PROJECT 
  JOIN AUTHORS ON PROJECT.AUTHOR_ID = AUTHORS.ID 
  WHERE PROJECT.ID = ?`, [id]);

const project = rows[0]; 
console.log("project is", project);

        return Response.json(project);

    }
    catch(error){
        console.log("error in fetching projects",error);
        return new Response(JSON.stringify({error:"Failed to fetch Projects"}));
    }
}