"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>Tailwind CSS</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Last Year - BE, Computer Science</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Speaking Effectively, NPTEL 2022</li>
        <li>The Full Stack Web Development Bootcamp, UDEMY 2024</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/About.avif"
          alt=""
          height={500}
          width={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full group">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg group-hover:translate-x-2 transition duration-200">
            I am a Passionate MERN Stack Developer with a deep-rooted passion for crafting efficient and scalable web applications. Proficient in JavaScript, React.js, Node.js, MongoDB, and SQL with a strong foundation in HTML, CSS, and JavaScript. Skilled in developing projects ranging from dynamic web interfaces to robust back-end systems, with knowledge of Git and GitHub.
            Familiar with programming languages like Java and C++. Experienced in JDBC for Java projects.
            I thrive in collaborative environments and am driven by a constant desire to learn and adapt to new technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
