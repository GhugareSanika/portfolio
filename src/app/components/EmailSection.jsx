"use client"
import React, { useEffect, useState } from "react";
import GithubIcon from "../../../public/github-icon.png";
import LinkedinIcon from "../../../public/Linkedin-logo.png";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("uE3BRNgpCZtYR9KCI");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    if (!email.endsWith("@gmail.com")) {
      setEmailError("Please enter a valid @gmail.com email address.");
      return;
    }

    setEmailError("");

    emailjs.sendForm(
      "service_gwb7xvn",
      "template_3f8cf9c",
      form,
      "uE3BRNgpCZtYR9KCI"
    ).then(
      (result) => {
        console.log(result.text);
        setEmailSubmitted(true);
      },
      (error) => {
        console.log(error.text);
      }
    );

    form.reset();
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/GhugareSanika">
            <div className="relative">
              <Image 
                src={GithubIcon} 
                alt="Github Icon" 
                className="transition-transform transform hover:scale-125 border-2 border-transparent hover:border-red-600 bg-black hover:bg-custom-bg-color shadow-sm hover:shadow-custom-shadow" 
              />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/sanika-ghugare-6158a0288/">
            <div className="relative">
              <Image 
                src={LinkedinIcon} 
                alt="Linkedin Icon"
                className="transition-transform transform hover:scale-150 border-2 border-transparent hover:border-red-600 bg-black hover:bg-custom-bg-color shadow-sm hover:shadow-custom-shadow" 
              />
            </div>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mb-4">
            Email sent successfully!
          </p>
        )}
        {emailError && (
          <p className="text-red-500 text-sm mb-4">
            {emailError}
          </p>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 border-2 hover:bg-custom-bg hover:shadow-custom-shadow p-4  border-gray-500 hover:bg-purple-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
