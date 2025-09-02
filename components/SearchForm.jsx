'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from "react-icons/fi";

const SearchForm = ({ query }) => {
  const formRef = useRef(null)
const router = useRouter()

  const handleReset = () => {
    console.log("coming herre");
    if (formRef.current) {
      formRef.current.reset()
    }
      router.push('/') 
  }

  return (
    <form
      ref={formRef}
      action="/"
      className="bg-gray-950 relative min-w-fit p-6 rounded-full search-form min-h-[70px]"
    >
      <input
        type="text"
        name="query"
        defaultValue=""
        className="absolute top-1 right-1 left-1 bottom-1 text-black bg-white rounded-full px-5 focus:outline-none placeholder:text-black placeholder:font-bold font-bold p-5"
        placeholder="Search Projects"
      />

      <div  className="flex items-center gap-2 text-black font-bold   rounded-full hover:cursor-pointer absolute z-20 right-5 top-0  ">
        {query && (
          <button
            type="button"
            onClick={handleReset}
            className="text-black font-semibold px-4 py-4 flex items-center rounded-full cursor-pointer"
          >
            {/* Reset */}
          </button>
        )}
   
      </div>

      
    </form>
  )
}

export default SearchForm
