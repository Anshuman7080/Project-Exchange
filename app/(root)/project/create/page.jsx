
"use client";

import ProjectForm from '@/components/ProjectForm'
import { redirect } from 'next/navigation';
import { motion } from "motion/react";
import React, { useEffect } from 'react'
import LampDemo, { LampContainer } from '@/components/ui/lamp';


const Create = () => {

 


  return (
  <>
    <section className=" min-h-[230px] mb-8">
        <h1 >
             <LampDemo/>
        </h1>

 
    </section>

    <ProjectForm />
  </>
  )
}

export default Create
