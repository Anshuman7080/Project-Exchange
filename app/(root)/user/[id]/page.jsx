"use client"
import { ThreeDCardDemo } from '@/components/ThreeDCard';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {

   const params=useParams();
    const id=params.id;
    const [userDetails,setUserDetails]=useState([]);
    
    useEffect(()=>{
       const fetchUserProjects=async()=>{
        const res=await fetch(`/api/allProjects?userId=${id}`);
        const data=await res.json();
      
        setUserDetails(data);
       }
       fetchUserProjects();
    },[id])

    console.log("userDetails are",userDetails);
   const author = userDetails?.author?.[0];
   const projectList=userDetails?.projects;
  //  console.log("project lists are",projectList);
   console.log("authors is",author);

  return (
    <>
        <section className=" flex gap-4 max-w-[95%] mx-auto ">

    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col  max-w-sm mx-auto p-4 relative h-[30rem] items-center mt-20 -ml-4">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={author?.USERNAME} imageUrl={author?.IMAGE} />

      <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
     {author?.NAME}
      </h2>
      <p className="  text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2  line-clamp-2 text-center py-2 ">
      {author?.BIO}

      </p>
    </div>



             <div className="flex-1 flex flex-col gap-5 lg:mt-24">
     
               <p className="text-40 font-bold ">
               {
                 projectList?.length > 0 ? ("All Projects"):(" ")
               }
                 </p>

                  <ul className="-mt-10 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 justify-center -mr-2">
                     {
                      projectList?.length > 0 ? (
                      projectList.map((item, ind) => (
                     <div className="" key={ind}>
                       <ThreeDCardDemo post={item} userName={author?.NAME} userId={author?.ID} />
                     </div>
                       ))
                ) : (
                          <div className="text-7xl font-semibold opacity-50 flex items-center mt-5 justify-center">No Project Found</div>
                  )

                     }
                 </ul>

        </div>



        </section>

        

    </>
  )
}

export default page
