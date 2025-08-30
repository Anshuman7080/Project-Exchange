"use client";

import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'

const ProjectForm = () => {
  return (
  <form>
    <div>
        <label htmlFor="title"
        className="">
            Title
        </label>
        <Input
            id="title"
            name="title"
            className=""
            required
            placeholder="Project Title"
        />
    </div>

       <div>
           <label htmlFor="description"
           className="">
               Description
           </label>
          <Textarea
            id="description"
            name="description"
            className=""
            required
            placeholder="Project Description"
          />
       </div>

      <div>

      <label htmlFor="category"
      className="">
          Category
      </label>
        <Input
            id="category"
            name="category"
            className=""
            required
            placeholder="Project Category(DIY,Electronics,NexJs...)"
        />

      </div>


       <div>

      <label htmlFor="link"
      className="">
          ImageUrl
      </label>
        <Input
            id="link"
            name="link"
            className=""
            required
            placeholder="Project Image URL"
        />

      </div>

      <div data-color-mode="light">
           
           <label htmlFor="details"
            className="">
               Details
           </label>

           <MDEditor
            id="details"
            preview="edit"
            height={300}
            style={{borderRadius:20 , overflow:"hidden"}}
                   
                   textareaProps={{
                    placeholder:"Describe your project in detail."
                   }}

                 previewOptions={{
                    disallowedElements:["style"]
                 }} 

           />

      </div>
           
  </form>
  )
}

export default ProjectForm
