"use client"
import { Boxes } from '@/components/ui/background-boxes'
import MarkdownIt from 'markdown-it'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page =  () => {
  const params=useParams();
  const id=params.id;

  // const md=MarkdownIt();
  const [projectDetails,setProjectDetails]=useState("");

  useEffect(()=>{
    const fetchProjectDetails = async () => {
      const res = await fetch(`/api/projects?ID=${id}`);
      const data = await res.json();
      setProjectDetails(data);
    };

    fetchProjectDetails();
  }, [id]);

  const isoDate = projectDetails?.CREATED_AT;
  const date = new Date(isoDate);

const formatted = date.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

// const parsedContent=md.render(projectDetails?.DETAILS || "")
  return (
    <>
          <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* Radial Mask Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Background */}
      <Boxes />

      <p className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-green-400 text-bold font-bold p-2 rounded-md mb-2">{formatted}</p>


      {/* Hero Content */}
      <div className="flex flex-col gap-1 md:gap-3 z-10 items-center justify-center w-full">
        <h1 className="bg-gray-950 text-white p-4 rounded-full w-full lg:max-w-[70%] text-3xl md:text-6xl text-center font-bold px-5 z-10 mx-4">
       {projectDetails?.TITLE}
        </h1>
        <p className="text-white text-sm md:text-xl font-bold py-8 w-full lg:max-w-[70%] mx-auto text-center px-5 z-10 break-words line-clamp-3">
            {projectDetails?.DESCRIPTION}
        </p>
      </div>

    </div> 

        <section className="max-w-[90%] mx-auto mt-10 ">
             <img src="https://blenderartists.org/uploads/default/original/4X/7/4/a/74a66e075a8459367d6d24b0ba3218841a30a788.jpeg" alt="" className="w-full h-auto rounded-xl " />

                  <div className="space-y-5 mt-10 max-w-[80%] mx-auto">
                    <div className="flex justify-between gap-5">
 
               <Link href="/" className=" flex gap-2 items-center mb-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden drop-shadow-lg">
                     <Image
                       src="https://blenderartists.org/uploads/default/original/4X/7/4/a/74a66e075a8459367d6d24b0ba3218841a30a788.jpeg"
                        alt="Project Image"
                           fill
                       className="object-cover"
                              />
                         </div>


                        <div className="flex flex-col gap-2">

                 <p className="text-20-medium font-semibold">{projectDetails?.AUTHOR_NAME}</p>
                <p className="text-sm  font-bold text-gray-500">@{projectDetails?.AUTHOR_NAME}</p>
                        </div>

               </Link>
                 
                 <p className="bg-green-200 rounded-md  h-10 px-1">
                 {projectDetails?.CATEGORY}
                 </p>

                    </div>

                  </div>
                           

                <div className="space-y-5 mt-5 max-w-[80%] mx-auto">
                      <h3 className="text-30 font-bold">
                      Project Details
                       </h3>
                       
                   <div>
                            {/* {
                parsedContent ? (
                <article className="prose max-w-4xl font-work-sans break-all"
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />
              ):(<div>No Result Found</div>)
              } */}

                {projectDetails?.DETAILS}
             

                    </div>
                    </div>       

                   <hr className="divider"/>
        </section>

     
    </>
  )
}

export default page
