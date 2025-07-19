"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project, index, darkMode, onProjectClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project)}
    >
      <div
        className={`rounded-2xl overflow-hidden h-80 sm:h-96 ${
          project.bgColor
        } ${project.textColor || ""} relative`}
      >
        {/* Tech Stack Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 left-4 right-4 z-10"
        >
          <div className="flex flex-wrap gap-1">
            {project.techStack?.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                className="px-2 py-1 bg-black bg-opacity-20 backdrop-blur-sm text-white text-xs rounded-full font-medium"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack && project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-black bg-opacity-20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </motion.div>

        <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
          <div>
            {project.subtitle && (
              <motion.span
                className="text-xs sm:text-sm font-medium opacity-70 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.3 }}
              >
                {project.subtitle}
              </motion.span>
            )}
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-xs sm:text-sm lg:text-base opacity-80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            className="flex items-center justify-between mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-xs font-medium opacity-60 uppercase tracking-wider">
              {project.category}
            </span>
            <div className="flex items-center space-x-2">
              {/* GitHub Icon */}
              {project.githubUrl && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.div>
              )}
              {/* Arrow */}
              <motion.div
                whileHover={{ x: 5 }}
                className="opacity-60 group-hover:opacity-100 transition-opacity text-lg sm:text-xl"
              >
                →
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />

        {/* Click hint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
        >
          Click to view details
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
