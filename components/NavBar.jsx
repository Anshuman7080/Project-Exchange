import { auth,signIn,signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
    const session=await auth();
    // console.log("session id is", session?.id);
    // console.log("session is", session);
  return (
   <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
         <nav className="flex justify-between items-center">
        <Link
        href="/"
        >
        <Image src="https://projects.deerwalk.edu.np/images/projectHub.png" width={164} height={40} alt="LOGO"/>
        </Link>

        <div className="flex items-center gap-5 text-black">
           {session && session?.user ? (
            <>
                 <Link href="/">
                <span className="text-2 font-sans max-sm:hidden">
                    Create
                </span>
            </Link>
 
               <form 
                action={async()=>{
                    "use server"
                    await signOut({redirectTo:"/"});
                }}>

                <button type="submit" className="text-6 font-sans">Logout</button>

                </form>

            <Link href={`/user/${session?.id}`}>
            {session?.user?.name}
            </Link>
            </>
           ) :
            (
                <form 
                action={async()=>{
                    "use server"
                    await signIn("github");
                }}>

                <button type="submit" className="text-6 font-sans">Login</button>

                </form>
            )
           }

        </div>

         </nav>
   </header>
  )
}

export default NavBar
