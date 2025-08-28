import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
const SearchForm = () => {
  return (
   <Form
   action="/"
   scroll={false}
   className="bg-gray-950 relative min-w-fit p-6 rounded-full">
      
      <input type="text" name="query" defaultValue="" className="absolute top-1 right-1 left-1 bottom-1 text-black bg-white rounded-full px-5 focus:outline-none
      placeholder:text-black placeholder:font-bold font-bold p-5" 
        placeholder='Search Projects'
      />
     
     <div className="flex gap-2">
         
         {
            true && (
                <div>
                    Reset
                </div>
            ) 
         }
 
     <button type="submit" className="search-button">Submit</button>
    
    <Search className="size-5"/>

     </div>


   </Form>
  )
}

export default SearchForm
