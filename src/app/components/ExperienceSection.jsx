"use client";
import React from "react";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white py-12">
      <h2 className="text-4xl font-bold mb-6 text-center">Experience</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto bg-[#1e1e1e] p-6 rounded-lg shadow-md">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/experience.jpg" // Make sure to have this image in your public/images folder
            alt="Experience"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Right Side: Experience Details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-green-400">
            Software Development Internship,&nbsp;
            <a
              href="https://primewiseconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-500"
            >
              Primewise Consulting
            </a>
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            09/2024 - 03/2025 | Remote
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>
              Developed scalable web applications using Next.js, TypeScript, and
              ShadCN to enhance frontend user experience and UI performance.
            </li>
            <li>
              Implemented RESTful APIs and handled server-side logic using
              Node.js to efficiently process and serve data.
            </li>
            <li>
              Collaborated in an Agile environment to design, develop, and
              deploy features, ensuring timely delivery and code quality using
              TypeScript.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
