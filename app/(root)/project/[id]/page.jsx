"use client"
import { Boxes } from '@/components/ui/background-boxes'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page =  () => {
  const params=useParams();
  const id=params.id;

  const [projectDetails,setProjectDetails]=useState("");

  useEffect(()=>{
    const fetchProjectDetails = async () => {
      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();
      setProjectDetails(data);
    };

    fetchProjectDetails();
  }, [id]);


  return (
    <>
          <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* Radial Mask Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Background */}
      <Boxes />
           
            <p className="tag relative">28 December 2025</p>


      {/* Hero Content */}
      <div className="flex flex-col gap-1 md:gap-3 z-10 items-center justify-center w-full">
        <h1 className="bg-gray-950 text-white p-4 rounded-full w-full lg:max-w-[70%] text-3xl md:text-6xl text-center font-bold px-5 z-10 mx-4">
         This is masterpiece project.
        </h1>
        <p className="text-white text-sm md:text-xl font-bold py-8 w-full lg:max-w-[70%] mx-auto text-center px-5 z-10 break-words line-clamp-3">
            This is a nice project description .
        </p>
      </div>

    </div> 

        <section className="">
             <img src="https://blenderartists.org/uploads/default/original/4X/7/4/a/74a66e075a8459367d6d24b0ba3218841a30a788.jpeg" alt="" className="w-full h-auto rounded-xl " />

                  <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex-between gap-5">
 
               <Link href="/" className=" flex gap-2 items-center mb-3">
                    <Image src="https://blenderartists.org/uploads/default/original/4X/7/4/a/74a66e075a8459367d6d24b0ba3218841a30a788.jpeg" alt="Project Image" width={64} height={64} className="rounded-full drop-shadow-lg" /> 
                
                        <div>

                 <p className="text-20-medium ">Author Name</p>
                <p className="text-16-medium text-black">@UserName</p>
                        </div>

               </Link>
                 
                 <p className="">
                    Electronics
                 </p>

                    </div>
              
              <h3 className="text-30-bold">
                Project Details
              </h3>
                
                <p className=""> No Details Provided</p>

                  </div>
                   <hr className="divider"/>
        </section>

     
    </>
  )
}

export default page
