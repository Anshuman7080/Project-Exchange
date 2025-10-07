import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
  const session = await auth()

  return (
   <header className="px-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        
        <Link href="/">
          <Image
            src="https://projects.deerwalk.edu.np/images/projectHub.png"
            width={164}
            height={40}
            alt="LOGO"
            className="object-contain"
          />
        </Link>

        <div className="hidden sm:flex items-center gap-4 text-black text-sm font-semibold">
          {session?.user ? (
            <>
              <Link href="/project/create">Create</Link>
              <form
                action={async () => {
                  'use server'
                  await signOut({ redirectTo: '/' })
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.id}`}>{session?.user?.name}</Link>
            </>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn('github')
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>

    
        <details className="sm:hidden relative">
          <summary className="cursor-pointer text-black font-bold text-xl">
            ☰
          </summary>
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-3 z-50 flex flex-col gap-2 text-sm font-semibold">
            {session?.user ? (
              <>
                <Link href="/project/create">Create</Link>
                <form
                  action={async () => {
                    'use server'
                    await signOut({ redirectTo: '/' })
                  }}
                >
                  <button type="submit">Logout</button>
                </form>
                <Link href={`/user/${session?.id}`}>{session?.user?.name}</Link>
              </>
            ) : (
              <form
                action={async () => {
                  'use server'
                  await signIn('github')
                }}
              >
                <button type="submit">Login</button>
              </form>
            )}
          </div>
        </details>
      </nav>
    </header>
  )
}

export default NavBar
