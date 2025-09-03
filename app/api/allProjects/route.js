import { db } from "@/config/db";



export async function GET(request) {
   
   try{
     const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    const author=await db.query(`SELECT * FROM AUTHORS WHERE ID =?`,[userId])
    const [projects] = await db.query(`SELECT * FROM PROJECT WHERE AUTHOR_ID =?`,[userId])
          
    // console.log("authors details are",author[0]);
    // console.log("authors projects are",projects);
    return Response.json({author:author[0],projects})

   }
   catch(error){
    console.log("error in fetching all projects of user",error);
    return Response.json(JSON.stringify({message:"Error in fetching all projects"}));
   }
}