"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const topLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-2.013-1.227-2.013-1.227 0-1.415.957-1.415 1.949v5.668h-3v-11h2.909v1.041h.041c.397-.75 1.364-1.54 2.807-1.54 3.003 0 3.556 1.977 3.556 4.547v6.952z"/>
      </svg>
    ),
    link: "https://www.linkedin.com/in/usamagog7/",
    description: "Let's connect on LinkedIn",
  },
  {
    name: "Download CV",
    icon: <DocumentArrowDownIcon className="w-8 h-8" />,
    link: "/projects/usama-cv.pdf",
    description: "Download my resume",
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    link: "https://github.com/Usamacodx",
    description: "View my projects",
  },
];

const bottomLinks = [
  {
    name: "Email",
    icon: <EnvelopeIcon className="w-8 h-8" />,
    link: "mailto:usamagog7@gmail.com",
    description: "Send me an email",
  },
  {
    name: "WhatsApp",
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
    link: "https://wa.me/923131046463",
    description: "Chat with me on WhatsApp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'd love to hear from you. Choose your preferred way to connect.
          </p>
        </motion.div>

        {/* Top row with LinkedIn, CV, and GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {topLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-gray-800 dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-blue-400 mb-4">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {link.name}
                </h3>
                <p className="text-gray-300">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom row with Email and WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bottomLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index + 3) * 0.2 }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {link.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 