"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <BackgroundGradient className="project-card rounded-xl overflow-hidden shadow-lg p-1.5 m-0">
      <div className="h-52 md:h-72 relative group">
        <div
          className="h-full w-full rounded-t-xl"
          style={{ background: `url(${imgUrl}) no-repeat center center`, backgroundSize: 'cover' }}
        >
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 justify-center items-center rounded-t-xl">
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ABD7BE] hover:border-white flex justify-center items-center group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ABD7BE] cursor-pointer hover:text-white group-hover/link:text-white" />
            </Link>

            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ABD7BE] hover:border-white flex justify-center items-center ml-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon className="h-10 w-10 text-[#ABD7BE] cursor-pointer hover:text-white group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-blue-200 rounded-b-xl mt-1 bg-[#181818] py-4 px-4">
        <h5 className="text-xl font-semibold mb-2 group-hover:translate-x-2 transition duration-200">{title}</h5>
        <p className="text-[#c9d2d6] group-hover:translate-x-2 transition duration-250">{description}</p>
      </div>
    </BackgroundGradient>
  );
};

export default ProjectCard;
