

import { db } from "@/config/db";

export async function init_Schema(){
    const connection= await db.getConnection();
    
    try{

        await connection.query(
           `
          CREATE TABLE IF NOT EXISTS AUTHORS(
          ID INT AUTO_INCREMENT PRIMARY KEY,
          NAME VARCHAR(255) NOT NULL,
          USERNAME VARCHAR(100) NOT NULL UNIQUE,
          EMAIL VARCHAR(255) NOT NULL UNIQUE,
          IMAGE TEXT,
          BIO TEXT
        )  `
        );
         
        await connection.query(
            `
            CREATE TABLE IF NOT EXISTS PROJECT(
            ID INT AUTO_INCREMENT PRIMARY KEY,
            SLUG VARCHAR(255) UNIQUE NOT NULL,
            TITLE VARCHAR(255) NOT NULL,
            AUTHOR_ID INT NOT NULL,
            VIEWS INT DEFAULT 0,
            DESCRIPTION TEXT,
            CATEGORY VARCHAR(255) NOT NULL,
            IMAGE TEXT,
            DETAILS TEXT,
            CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (AUTHOR_ID) REFERENCES AUTHORS(ID) ON DELETE CASCADE
            )
            `
        );


         await connection.query(
            `
            CREATE TABLE IF NOT EXISTS PLAYLIST(
            ID INT AUTO_INCREMENT PRIMARY KEY,
            NAME VARCHAR(255) NOT NULL,
            CATEGORY VARCHAR(100) NOT NULL,
            CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            `
         )

        await connection.query(
            `CREATE TABLE IF NOT EXISTS PLAYLIST_PROJECT(
            PLAYLIST_ID INT NOT NULL,
            PROJECT_ID INT NOT NULL,
            PRIMARY KEY (PLAYLIST_ID, PROJECT_ID),
            FOREIGN KEY (PLAYLIST_ID) REFERENCES PLAYLIST(ID) ON DELETE CASCADE,
            FOREIGN KEY (PROJECT_ID) REFERENCES PROJECT(ID) ON DELETE CASCADE
            )`
        )

        console.log("All Tables are created successfully")

    }
    catch(error){
        console.log("error in initialising the Schemas",error);
    }
    finally{
        await connection.release();
    }

}