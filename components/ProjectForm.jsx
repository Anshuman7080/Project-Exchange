"use client";

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { formSchema } from '@/lib/validation';
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProjectForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [details, setDetails] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = { title, description, category, link, details };

    try {
      await formSchema.parseAsync(formValues);

      const result = await fetch(`/api/createProject`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await result.json();
      console.log("data is", data);

      if (data.success) {
        toast("Project has been Created!");
        setTitle("");
        setDescription("");
        setCategory("");
        setLink("");
        setDetails("");
        router.push(`/project/${data.project[0].ID}`);
      } else {
        toast.error("Failed to create project.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center w-full px-4 ">
      <div className="w-full md:w-1/2 mb-4">
        <label htmlFor="title" className="block mb-1 font-medium">Title</label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Project Title"
          className="w-full h-12 border-2 border-gray-500 rounded-md px-3"
        />
      </div>

      <div className="w-full md:w-1/2 mb-4">
        <label htmlFor="description" className="block mb-1 font-medium">Description</label>
        <Textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Project Description"
          className="w-full h-24 border-2 border-gray-500 rounded-md px-3"
        />
      </div>

      <div className="w-full md:w-1/2 mb-4">
        <label htmlFor="category" className="block mb-1 font-medium">Category</label>
        <Input
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          placeholder="Project Category (DIY, Electronics, Next.js...)"
          className="w-full h-12 border-2 border-gray-500 rounded-md px-3"
        />
      </div>

      <div className="w-full md:w-1/2 mb-4">
        <label htmlFor="link" className="block mb-1 font-medium">Image URL</label>
        <Input
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          placeholder="Project Image URL"
          className="w-full h-12 border-2 border-gray-500 rounded-md px-3"
        />
      </div>

      <div className="w-full md:w-1/2 mb-4" data-color-mode="light">
        <label htmlFor="details" className="block mb-1 font-medium">Details</label>
        <MDEditor
          value={details}
          onChange={(value) => setDetails(value)}
          id="details"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden", border: "2px solid #6b7280" }}
          textareaProps={{
            placeholder: "Describe your project in detail.",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
      </div>
 
 <Button
  type="submit"
  className="mt-4 w-full md:w-[45%] h-12 border-2 border-gray-500 rounded-md project-form_btn text-white"
>
  Submit
</Button>


    </form>
  );
};

export default ProjectForm;
