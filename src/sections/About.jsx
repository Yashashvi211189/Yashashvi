import { motion } from "framer-motion";

const About = () => {

  // Education data
  const educationData = [
    {
      id: 1,
      level: "College",
      institution: "Jaypee University of Information Technology",
      cgpa: "CGPA 7.0",
      description: "Private university in Waknaghat, Himachal Pradesh",
      website: "https://www.juit.ac.in/",
      icon: "🎓",
      color: "from-aqua/20 to-mint/20",
      borderColor: "border-aqua/30"
    },
    {
      id: 2,
      level: "12th Class",
      institution: "Silver Line Prestige School",
      board: "CBSE - 89%",
      description: "Google Reference School for Technology Integration",
      website: "https://silverlineprestigeschool.com/",
      icon: "📚",
      color: "from-lavender/20 to-royal/20",
      borderColor: "border-lavender/30"
    },
    {
      id: 3,
      level: "10th Class",
      institution: "Ingraham Institute English Medium School",
      board: "ICSE - 89%",
      description: "English medium co-educational institution since 1966",
      website: "https://www.ingrahaminstitute.com/?page_id=329",
      icon: "📖",
      color: "from-fuchsia/20 to-coral/20",
      borderColor: "border-fuchsia/30"
    }
  ];

  // Technical Arsenal organized by categories
  const technicalArsenal = {
    "Languages": ["Java", "JavaScript", "Python", "HTML", "CSS"],
    "Frameworks": ["React.js", "Spring Boot", "Flask"],
    "Databases": ["Firebase", "MySQL", "MongoDB"],
    "Tools & Platforms": ["GitHub", "Docker", "VS Code", "Postman", "REST API", "Cloud Technology"]
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -5,
      rotateX: 5,
      boxShadow: "0 25px 50px rgba(51, 194, 204, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-aqua rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-mint rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-lavender rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-fuchsia rounded-full animate-pulse delay-500"></div>
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-aqua via-mint to-lavender bg-clip-text text-transparent mb-4">
            About Yashashvi
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            A Developer from a Galaxy Far, Far Away
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-aqua to-mint mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Education Section - 3 Column Layout */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <span className="text-mint mr-4">⚡</span>
              EDUCATION
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-mint to-aqua mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${edu.color} backdrop-blur-sm border ${edu.borderColor} rounded-2xl p-6 relative overflow-hidden group`}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="text-4xl mb-3">{edu.icon}</div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">{edu.level}</h4>
                    <p className="text-aqua font-semibold text-sm">{edu.board || edu.cgpa}</p>
                    <h5 className="text-white font-medium text-sm leading-tight">{edu.institution}</h5>
                    <p className="text-neutral-300 text-xs leading-relaxed">{edu.description}</p>
                  </div>
                  
                  <motion.a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-mint/20 to-aqua/20 border border-mint/30 rounded-lg text-mint text-xs font-medium hover:border-aqua/50 transition-all duration-300"
                  >
                    <span className="mr-1">🔗</span>
                    Visit Website
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <span className="text-lavender mr-4">⚙️</span>
              TECHNICAL ARSENAL
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-lavender to-royal mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.entries(technicalArsenal).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-royal/80 via-lavender/60 to-storm/80 rounded-2xl p-6 backdrop-blur-sm border border-lavender/30 relative overflow-hidden group"
              >
                {/* Holographic glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="text-center">
                    <h4 className="text-lavender font-bold text-lg mb-3 flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.5 }}
                        className="mr-2"
                      >
                        ⚡
                      </motion.span>
                      {category}
                    </h4>
                  </div>
                  
                  <div className="space-y-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="px-3 py-2 bg-midnight/50 border border-lavender/20 rounded-lg text-white text-sm font-medium hover:border-royal/50 hover:shadow-lg hover:shadow-lavender/25 transition-all duration-300 cursor-pointer text-center"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Animated scan lines */}
                <motion.div
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-lavender/30 to-transparent"
                  animate={{ y: [0, 200, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: categoryIndex * 0.5, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* DEBUG: Resume Section Marker */}
        <div className="text-center mt-16 mb-4">
          <div className="bg-red-500 text-white px-4 py-2 rounded inline-block">
            🔍 RESUME BUTTON SHOULD BE BELOW THIS LINE 🔍
          </div>
        </div>

        {/* Resume Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8 mb-16 relative z-50"
        >
          <motion.a
            href="https://drive.google.com/file/d/1pqPO0LfGUtZaN6od_WEO3ybJblAcczKG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(51, 194, 204, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-aqua/20 via-mint/30 to-aqua/20 border-2 border-aqua/40 rounded-full text-white font-bold text-lg hover:border-mint/60 transition-all duration-300 shadow-lg shadow-aqua/25 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Holographic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-aqua/10 via-mint/20 to-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-aqua/5 to-mint/5 rounded-full"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 flex items-center">
              {/* Icon */}
              <motion.span 
                className="mr-3 text-2xl"
                animate={{ 
                  rotateY: [0, 180, 360],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                📄
              </motion.span>
              
              {/* Text */}
              <span className="bg-gradient-to-r from-white via-aqua to-mint bg-clip-text text-transparent font-extrabold tracking-wide">
                VIEW RESUME
              </span>
              
              {/* Arrow */}
              <motion.span 
                className="ml-3 text-mint"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </div>
            
            {/* Scan line animation */}
            <motion.div
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-mint/80 to-transparent top-1/2"
              animate={{ 
                x: [-100, 300],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.a>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-neutral-400 text-sm mt-4 font-medium"
          >
            Download my complete professional profile
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;