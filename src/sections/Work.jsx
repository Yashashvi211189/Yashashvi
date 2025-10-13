import { motion } from "framer-motion";
import { useState } from "react";

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Task Tracker App",
      icon: "🪐",
      description: "A comprehensive task management system built with Flask, SQLite, and Docker for efficient project tracking and team collaboration.",
      tech: ["Flask", "SQLite", "Docker", "Python", "HTML/CSS"],
      features: [
        "Real-time task updates",
        "Team collaboration tools", 
        "Docker containerization",
        "RESTful API architecture"
      ],
      githubUrl: "https://github.com/Yashashvi211189/task-app-tracker-with-flask",
      gradient: "from-aqua/20 via-mint/15 to-navy/20",
      borderColor: "border-aqua/30",
      accentColor: "text-aqua"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      icon: "⚔️",
      description: "A modern e-commerce solution powered by React.js and Firebase, featuring real-time inventory management and secure payment integration.",
      tech: ["React.js", "Firebase", "JavaScript", "CSS", "Authentication"],
      features: [
        "Real-time inventory tracking",
        "Secure user authentication",
        "Dynamic product catalog",
        "Responsive design system"
      ],
      githubUrl: "https://github.com/Yashashvi211189/E_commerce",
      gradient: "from-fuchsia/20 via-coral/15 to-orange/20",
      borderColor: "border-fuchsia/30",
      accentColor: "text-fuchsia"
    },
    {
      id: 3,
      title: "Experience Verification & Portfolio Platform",
      icon: "🛰️",
      description: "Full-stack platform for experience verification and portfolio management using Node.js, MongoDB, JWT authentication, and Express framework.",
      tech: ["Node.js", "MongoDB", "JWT", "Express", "Authentication"],
      features: [
        "JWT-based authentication",
        "Document verification system",
        "Portfolio management tools",
        "MongoDB database integration"
      ],
      githubUrl: "https://github.com/Yashashvi211189/portfolio-platform",
      gradient: "from-lavender/20 via-royal/15 to-storm/20",
      borderColor: "border-lavender/30",
      accentColor: "text-lavender"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -15,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        damping: 20
      }
    },
    hover: {
      y: -20,
      rotateX: 5,
      scale: 1.03,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const FloatingElement = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [-10, 10, -10],
        x: [-5, 5, -5],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <section id="work" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <FloatingElement 
          className="top-20 left-10 w-12 h-12 border border-aqua/40 rounded-full bg-gradient-to-r from-aqua/10 to-mint/10" 
          delay={0}
        />
        <FloatingElement 
          className="top-40 right-20 w-8 h-8 border border-fuchsia/40 rounded-lg bg-gradient-to-r from-fuchsia/10 to-coral/10" 
          delay={1}
        />
        <FloatingElement 
          className="bottom-32 left-1/4 w-16 h-16 border border-lavender/40 rounded-full bg-gradient-to-r from-lavender/10 to-royal/10" 
          delay={2}
        />
        <FloatingElement 
          className="top-1/2 right-10 w-6 h-6 border border-mint/40 rounded-lg bg-gradient-to-r from-mint/10 to-aqua/10" 
          delay={1.5}
        />
        
        {/* Star Wars props */}
        <div className="absolute top-16 right-1/3 text-4xl opacity-20 animate-pulse">🚀</div>
        <div className="absolute bottom-20 right-16 text-3xl opacity-20 animate-pulse delay-1000">🤖</div>
        <div className="absolute top-1/3 left-16 text-2xl opacity-20 animate-pulse delay-700">✨</div>
      </div>

      <div className="c-space relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia via-coral to-orange bg-clip-text text-transparent mb-4">
            Work Portfolio
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-6">
            Exploring the Galaxy Through Code - Projects from Different Star Systems
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-fuchsia to-coral mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 backdrop-blur-sm border ${project.borderColor} relative overflow-hidden group cursor-pointer`}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              style={{
                boxShadow: hoveredProject === project.id 
                  ? `0 25px 50px -12px ${project.borderColor.replace('border-', '').replace('/30', '').replace('-', '')}/50` 
                  : 'none'
              }}
            >
              {/* Holographic overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Project Icon & Title */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-5xl">{project.icon}</div>
                  <motion.div
                    animate={{
                      rotate: hoveredProject === project.id ? 360 : 0
                    }}
                    transition={{ duration: 0.8 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} border ${project.borderColor} flex items-center justify-center`}
                  >
                    <div className={`w-3 h-3 rounded-full ${project.accentColor.replace('text-', 'bg-')}`}></div>
                  </motion.div>
                </div>

                <div>
                  <h3 className={`text-2xl font-bold text-white mb-3 ${project.accentColor}`}>
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center">
                    <span className={`mr-2 ${project.accentColor}`}>⚡</span>
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (techIndex * 0.05), duration: 0.3 }}
                        className={`px-3 py-1 bg-midnight/50 border ${project.borderColor} rounded-full text-xs font-medium text-neutral-200 hover:${project.accentColor.replace('text-', 'border-')} transition-colors duration-300`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center">
                    <span className={`mr-2 ${project.accentColor}`}>🎯</span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.1), duration: 0.4 }}
                        className="text-neutral-300 text-sm flex items-start"
                      >
                        <span className={`${project.accentColor} mr-2 mt-0.5`}>→</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} border ${project.borderColor} rounded-lg text-white font-medium hover:shadow-lg hover:shadow-${project.accentColor.replace('text-', '').replace('-', '')}/25 transition-all duration-300 group`}
                  >
                    <span className="mr-2">🔗</span>
                    View on GitHub
                    <motion.span
                      animate={{
                        x: hoveredProject === project.id ? 5 : 0
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>

              {/* Holographic scan lines effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <motion.div
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    y: hoveredProject === project.id ? [0, 300, 0] : 0,
                    opacity: hoveredProject === project.id ? [0, 1, 0] : 0
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredProject === project.id ? Infinity : 0,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-storm/20 via-navy/10 to-indigo/20 rounded-2xl border border-mint/20 backdrop-blur-sm max-w-4xl mx-auto"
        >
          <div className="text-4xl mb-4">🌌</div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Upload GitHub Links
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            The transmission channels are ready to receive your repository coordinates. 
            Please provide the GitHub links for these projects to complete the holocards.
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-aqua rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-mint rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-lavender rounded-full animate-pulse delay-400"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;