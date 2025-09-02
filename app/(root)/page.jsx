"use client"
import { cn } from '@/lib/utils'
import { Boxes } from '@/components/ui/background-boxes'
import React, { useEffect, useState } from 'react'
import SearchForm from '@/components/SearchForm'
import { ThreeDCardDemo } from '@/components/ThreeDCard'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  
    const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  // console.log("query in page",query)

  useEffect(() => {
  
      fetch(`/api/search?query=${query}`)
        .then(res => res.json())
        .then(data => setResults(data));
    
  }, [query]);

//  console.log("result is",results);

  return (
  <>

         <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* Radial Mask Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Background */}
      <Boxes />

      {/* Hero Content */}
      <div className="flex flex-col gap-1 md:gap-3 z-10 items-center justify-center w-full">
        <h1 className="bg-gray-950 text-white p-4 rounded-full w-full lg:max-w-[70%] text-3xl md:text-6xl text-center font-bold px-5 z-10 mx-4">
          Welcome To Projects Store
        </h1>
        <p className="text-white text-sm md:text-xl font-bold py-8 w-full lg:max-w-[70%] mx-auto text-center px-5 z-10 break-words ">
          Where project meet like-minded people.
        </p>
      </div>

      {/* Search Form */}
      <div className="w-full lg:max-w-[70%] z-10">
        <SearchForm  query={query} />
      </div>

    </div>

    <section className="">
      <p className="text-30-semibold">
      {query ? `Search Result for "${query}"`: "Trendy Projects"}
      </p>

        <ul className="mt-7 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-1 
        justify-center">
            {
            results?.map((item,ind)=>(
                <ThreeDCardDemo key={ind} post={item}/>
              ))
            }
        </ul>

    </section>

  </>

  )
}

export default Page
