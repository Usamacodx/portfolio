"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  sections: [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/usamagog7/" },
        { name: "GitHub", href: "https://github.com/Usamacodx" },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                M Usama
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Full Stack Developer, WordPress Expert & Penetration Testing Enthusiast
              </p>
            </motion.div>
          </div>

          {footerLinks.sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} M Usama. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 