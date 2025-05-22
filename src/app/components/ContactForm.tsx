"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResultMsg(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setResultMsg("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResultMsg("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Left message */}
      <div className="md:w-1/2 flex flex-col justify-start">
        <h2 className="text-3xl font-bold mb-4 text-foreground">{`Contact`}</h2>
        <p className="text-lg text-muted-foreground">
          {`Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.`}
        </p>

        <footer className="text-center mb-5 text-sm space-y-4">
          <div className="flex justify-start mt-5 gap-4">
            <a
              href="https://github.com/Mirko-Perez"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mirko-perez-/"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:mirkoluisperez@gmail.com"
              className="hover:text-blue-500"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </footer>
      </div>

      {/* Right form */}
      <form
        onSubmit={handleSubmit}
        className={`md:w-1/2 p-6 rounded-lg border transition-colors duration-300
          ${
            theme === "dark"
              ? "bg-slate-900 border-slate-700 text-gray-200"
              : "bg-white border-gray-300 text-black"
          }
        `}
      >
        <label className="block mb-4">
          <span className="block mb-1 font-medium">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 rounded-md border transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-600 text-gray-200 placeholder-gray-400 focus:border-slate-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-600 focus:border-slate-600"
              }`}
            placeholder="Your name"
          />
        </label>

        <label className="block mb-4">
          <span className="block mb-1 font-medium">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 rounded-md border transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-600 text-gray-200 placeholder-gray-400 focus:border-slate-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-600 focus:border-slate-600"
              }`}
            placeholder="you@example.com"
          />
        </label>

        <label className="block mb-6">
          <span className="block mb-1 font-medium">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 resize-none
              ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-600 text-gray-200 placeholder-gray-400 focus:border-slate-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-600 focus:border-slate-600"
              }`}
            placeholder="Write your message here..."
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md font-semibold text-white transition-colors duration-300
            ${
              loading
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600"
            }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {resultMsg && (
          <p
            className={`mt-4 text-center font-medium ${
              resultMsg.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {resultMsg}
          </p>
        )}
      </form>
    </>
  );
}
