"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useRouter } from 'next/navigation';

export function ThreeDCardDemo({post,userName,userId}) {
  const router=useRouter();
  console.log("post if",post);
  return (
    <CardContainer className="inter-var h-22[rem] ">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-[31rem] rounded-xl  border p-6 ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
                   {post?.TITLE}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2">
         {post?.DESCRIPTION}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={post?.IMAGE}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={`/user/${post?.AUTHOR_ID}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
           @{userName}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={() => router.push(`/project/${post?.ID}`)}>
            Details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
