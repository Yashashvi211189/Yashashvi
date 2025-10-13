import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [hoveredExperience, setHoveredExperience] = useState(null);

  const experienceData = {
    internship: {
      company: "Powerserv Technologies Private Limited",
      role: "Front-End Intern",
      duration: "June 2024 – July 2024",
      location: "Noida, U.P.",
      website: "https://powerservtech.com/blog.html",
      achievements: [
        "Engineered and improved internal web apps using React.js + Firebase, boosting workflow efficiency by 25%.",
        "Launched new user-facing features; improved page load speed by 30%.",
        "Executed tests with Jest & Postman; achieved 100% API reliability.",
        "Led code reviews, reducing technical debt by 15%."
      ],
      starWarsCharacter: "🤖", // R2D2 representation
      gradient: "from-aqua/20 via-mint/15 to-navy/20",
      borderColor: "border-aqua/30"
    },
    leadership: {
      organization: "Omega Leo Club",
      role: "President & Technical Incharge",
      duration: "Aug 2023 – July 2024",
      achievements: [
        "Directed 10+ community & tech programs impacting 300+ participants.",
        "Supervised a 60-member team, improving retention by 20%.",
        "Organized workshops with 90% positive feedback."
      ],
      starWarsCharacter: "🌟", // Jedi representation
      gradient: "from-lavender/20 via-royal/15 to-storm/20",
      borderColor: "border-lavender/30"
    }
  };

  const beyondCodeData = [
    {
      title: "NCC Member",
      description: "Attended camps, achieved Grade A in C Certificate.",
      icon: "🎖️",
      color: "text-mint"
    },
    {
      title: "Events & Procurement Committee",
      description: "Senior Member organizing major college events.",
      icon: "🎯",
      color: "text-fuchsia"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -10,
      rotateX: 5,
      transition: { duration: 0.3 }
    }
  };

  const StarWarsCharacter = ({ character, isHovered }) => (
    <motion.div
      className="text-6xl opacity-20 absolute top-4 right-4"
      animate={{
        scale: isHovered ? [1, 1.2, 1] : 1,
        rotate: isHovered ? [0, 10, -10, 0] : 0,
        opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2
      }}
      transition={{
        duration: 2,
        repeat: isHovered ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      {character}
    </motion.div>
  );

  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-20 w-4 h-4 bg-aqua rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-lavender rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-mint rounded-full animate-pulse delay-1000"></div>
        
        {/* Floating spaceships */}
        <motion.div
          className="absolute top-40 right-1/4 text-3xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-2xl opacity-30"
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🛸
        </motion.div>
      </div>

      <div className="c-space relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia via-coral to-orange bg-clip-text text-transparent mb-4">
            🚀 EXPERIENCE LOG
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-6">
            Mission Reports from the Galaxy of Professional Adventures
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-fuchsia to-coral mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Experience Container */}
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Internship Experience */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${experienceData.internship.gradient} backdrop-blur-sm border ${experienceData.internship.borderColor} rounded-3xl p-8 md:p-12 relative overflow-hidden group`}
            onHoverStart={() => setHoveredExperience('internship')}
            onHoverEnd={() => setHoveredExperience(null)}
          >
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Star Wars Character */}
            <StarWarsCharacter 
              character={experienceData.internship.starWarsCharacter} 
              isHovered={hoveredExperience === 'internship'}
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="mb-6 md:mb-0 md:flex-1">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    animate={{ glow: hoveredExperience === 'internship' }}
                  >
                    🛰️ Internship
                  </motion.h3>
                  <h4 className="text-aqua text-xl font-semibold mb-1">{experienceData.internship.company}</h4>
                  <p className="text-mint font-medium text-lg mb-1">{experienceData.internship.role}</p>
                  <p className="text-neutral-300 text-sm mb-1">{experienceData.internship.duration}</p>
                  <p className="text-neutral-400 text-sm mb-4">{experienceData.internship.location}</p>
                  
                  <motion.a
                    href={experienceData.internship.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-aqua/20 to-mint/20 border border-aqua/30 rounded-lg text-aqua text-sm font-medium hover:border-mint/50 transition-all duration-300"
                  >
                    <span className="mr-2">🔗</span>
                    Visit Company
                  </motion.a>
                </div>
                
                {/* Control Room Panel Effect */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-midnight/50 rounded-xl p-6 border border-aqua/20 backdrop-blur-sm">
                    <div className="text-center space-y-3">
                      <div className="text-4xl mb-2">💻</div>
                      <div className="text-aqua font-bold text-sm">MISSION STATUS</div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-mint rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-aqua rounded-full animate-pulse delay-200"></div>
                        <div className="w-3 h-3 bg-lavender rounded-full animate-pulse delay-400"></div>
                      </div>
                      <div className="text-mint text-xs font-medium">COMPLETED</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievement List */}
              <div className="space-y-4">
                <h5 className="text-white font-bold text-lg flex items-center mb-4">
                  <span className="text-mint mr-3">🎯</span>
                  Mission Achievements
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experienceData.internship.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start space-x-3 p-4 bg-midnight/40 rounded-xl border border-aqua/20 hover:border-mint/40 transition-all duration-300"
                    >
                      <span className="text-aqua text-sm mt-0.5 flex-shrink-0">→</span>
                      <span className="text-neutral-200 text-sm leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Experience */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${experienceData.leadership.gradient} backdrop-blur-sm border ${experienceData.leadership.borderColor} rounded-3xl p-8 md:p-12 relative overflow-hidden group`}
            onHoverStart={() => setHoveredExperience('leadership')}
            onHoverEnd={() => setHoveredExperience(null)}
          >
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Star Wars Character */}
            <StarWarsCharacter 
              character={experienceData.leadership.starWarsCharacter} 
              isHovered={hoveredExperience === 'leadership'}
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="mb-6 md:mb-0 md:flex-1">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    animate={{ glow: hoveredExperience === 'leadership' }}
                  >
                    🌌 College Leadership
                  </motion.h3>
                  <h4 className="text-lavender text-xl font-semibold mb-1">{experienceData.leadership.organization}</h4>
                  <p className="text-royal font-medium text-lg mb-1">{experienceData.leadership.role}</p>
                  <p className="text-neutral-300 text-sm mb-4">{experienceData.leadership.duration}</p>
                </div>
                
                {/* Jedi Council Panel Effect */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-midnight/50 rounded-xl p-6 border border-lavender/20 backdrop-blur-sm">
                    <div className="text-center space-y-3">
                      <div className="text-4xl mb-2">⭐</div>
                      <div className="text-lavender font-bold text-sm">COUNCIL STATUS</div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-royal rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-lavender rounded-full animate-pulse delay-200"></div>
                        <div className="w-3 h-3 bg-fuchsia rounded-full animate-pulse delay-400"></div>
                      </div>
                      <div className="text-royal text-xs font-medium">LEADERSHIP</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievement List */}
              <div className="space-y-4">
                <h5 className="text-white font-bold text-lg flex items-center mb-4">
                  <span className="text-lavender mr-3">👑</span>
                  Leadership Achievements
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experienceData.leadership.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start space-x-3 p-4 bg-midnight/40 rounded-xl border border-lavender/20 hover:border-royal/40 transition-all duration-300"
                    >
                      <span className="text-lavender text-sm mt-0.5 flex-shrink-0">→</span>
                      <span className="text-neutral-200 text-sm leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Beyond Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center">
              <span className="text-fuchsia mr-4">⚔️</span>
              BEYOND CODE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {beyondCodeData.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-fuchsia/20 via-coral/10 to-orange/20 rounded-xl p-6 border border-fuchsia/30 backdrop-blur-sm relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center space-y-3">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h4 className={`${item.color} font-bold text-lg`}>{item.title}</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;