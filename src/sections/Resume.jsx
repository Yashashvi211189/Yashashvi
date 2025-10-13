import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-primary via-midnight to-navy">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-3 h-3 bg-aqua rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-mint rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-lavender rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-fuchsia rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-coral rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-aqua/20"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                borderColor: ['rgba(51, 194, 204, 0.1)', 'rgba(51, 194, 204, 0.3)', 'rgba(51, 194, 204, 0.1)']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.02,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="c-space relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-aqua via-mint to-lavender bg-clip-text text-transparent mb-6"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            RESUME
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Access my complete professional profile and download the full document
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-aqua to-mint mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-storm/80 via-indigo/60 to-navy/80 backdrop-blur-lg border-2 border-aqua/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            
            {/* Holographic Border Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-aqua/10 via-transparent to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              animate={{ 
                background: [
                  'linear-gradient(135deg, rgba(51, 194, 204, 0.1) 0%, transparent 50%, rgba(87, 219, 150, 0.1) 100%)',
                  'linear-gradient(135deg, rgba(87, 219, 150, 0.1) 0%, transparent 50%, rgba(122, 87, 219, 0.1) 100%)',
                  'linear-gradient(135deg, rgba(122, 87, 219, 0.1) 0%, transparent 50%, rgba(51, 194, 204, 0.1) 100%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Scan Lines */}
            <motion.div
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-aqua/60 to-transparent"
              animate={{ y: [0, 300, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 text-center space-y-8">
              {/* Resume Icon */}
              <motion.div
                animate={{ 
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="text-8xl md:text-9xl mb-8"
              >
                📄
              </motion.div>

              {/* Resume Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Professional Resume
                </h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Complete overview of my technical skills, educational background, 
                  project experience, and professional achievements in software development.
                </p>
              </div>

              {/* Resume Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-royal/20 border border-lavender/30 rounded-2xl p-4"
                >
                  <div className="text-2xl mb-2">🎓</div>
                  <h4 className="text-white font-semibold mb-1">Education</h4>
                  <p className="text-neutral-400 text-sm">Academic Background</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-royal/20 border border-lavender/30 rounded-2xl p-4"
                >
                  <div className="text-2xl mb-2">💻</div>
                  <h4 className="text-white font-semibold mb-1">Technical Skills</h4>
                  <p className="text-neutral-400 text-sm">Programming & Tools</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-royal/20 border border-lavender/30 rounded-2xl p-4"
                >
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="text-white font-semibold mb-1">Projects</h4>
                  <p className="text-neutral-400 text-sm">Portfolio & Work</p>
                </motion.div>
              </div>

              {/* Main Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1pqPO0LfGUtZaN6od_WEO3ybJblAcczKG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(51, 194, 204, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-aqua/30 via-mint/40 to-aqua/30 border-3 border-aqua/50 rounded-full text-white font-bold text-xl hover:border-mint/70 transition-all duration-300 shadow-2xl shadow-aqua/30 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-aqua/20 via-mint/30 to-aqua/20 rounded-full"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10 flex items-center">
                  {/* Download Icon */}
                  <motion.span 
                    className="mr-4 text-3xl"
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  >
                    📥
                  </motion.span>
                  
                  {/* Button Text */}
                  <span className="bg-gradient-to-r from-white via-aqua to-mint bg-clip-text text-transparent font-extrabold tracking-wide">
                    DOWNLOAD RESUME
                  </span>
                  
                  {/* Arrow */}
                  <motion.span 
                    className="ml-4 text-mint text-2xl"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ 
                      duration: 1.8, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </div>
                
                {/* Scan line animation */}
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-mint/90 to-transparent top-1/2"
                  animate={{ 
                    x: [-200, 400],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                />
              </motion.a>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-6 border-t border-aqua/20"
              >
                <p className="text-neutral-400 text-sm mb-2">
                  📁 PDF Format • 📄 2 Pages • 🔄 Updated December 2024
                </p>
                <p className="text-aqua/70 text-xs">
                  Click to view and download my complete professional profile
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;