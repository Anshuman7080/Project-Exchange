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
        console.log("data is ",data);
        setUserDetails(data);
       }
       fetchUserProjects();
    },[id])

    console.log("userDetails are",userDetails);

  return (
    <>
        <section className=" flex gap-4 max-w-[95%] mx-auto ">

    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col  max-w-sm mx-auto p-4 relative h-[30rem] items-center mt-20">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="hover" imageUrl="https://yt3.googleusercontent.com/ytc/AL5GRJXtX1z6lrtVPTA8adUnNAJm-wHLYJazTiDNWV2F=s900-c-k-c0x00ffffff-no-rj" />

      <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
       UserName
      </h2>
      <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-11 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

      </p>
    </div>



<div className="flex-1 flex flex-col gap-5 lg:mt-5">
     
     <p className="text-30-bold">
        ALL Projects
     </p>

          <ul className="mt-7 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-1 
                 justify-center">
                     {
                       [{'id' : 123 ,"title" : "A New Project", 'desc':"A Great Description"},
                       {'id' : 124 ,"title" : "A New Project", 'desc':"A Great Description"},
                       {'id' : 125 ,"title" : "A New Project", 'desc':"A Great Description"},
                       {'id' : 126 ,"title" : "A New Project", 'desc':"A Great Description"}].map((item,ind)=>(
                         <ThreeDCardDemo key={item.id} />
                       ))
                     }
                 </ul>

        </div>



        </section>

        

    </>
  )
}

export default page
