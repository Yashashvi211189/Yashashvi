import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = {
    name: 'Yashashvi Agnihotri',
    location: 'Ghaziabad, U.P., India',
    phone: '8178437828',
    email: 'yashashviagnihotri007@gmail.com'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '🔗',
      url: 'https://linkedin.com/in/yashashvi-agnihotri',
      color: 'from-aqua to-mint',
      hoverColor: 'hover:border-aqua/50'
    },
    {
      name: 'GitHub',
      icon: '⚡',
      url: 'https://github.com/Yashashvi211189',
      color: 'from-lavender to-royal',
      hoverColor: 'hover:border-lavender/50'
    },
    {
      name: 'Phone',
      icon: '📞',
      url: `tel:+91${contactInfo.phone}`,
      color: 'from-mint to-aqua',
      hoverColor: 'hover:border-mint/50'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: `mailto:${contactInfo.email}`,
      color: 'from-fuchsia to-coral',
      hoverColor: 'hover:border-fuchsia/50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const HolographicOrb = ({ delay = 0, size = "w-4 h-4" }) => (
    <motion.div
      className={`${size} rounded-full bg-gradient-to-r from-aqua/40 to-mint/40 absolute`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <HolographicOrb delay={0} size="w-6 h-6" />
        <div className="absolute top-20 right-20">
          <HolographicOrb delay={1} size="w-3 h-3" />
        </div>
        <div className="absolute bottom-32 left-16">
          <HolographicOrb delay={2} size="w-5 h-5" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <HolographicOrb delay={1.5} size="w-4 h-4" />
        </div>
        
        {/* Communication Arrays */}
        <div className="absolute top-16 left-1/4 text-3xl opacity-30 animate-pulse">📡</div>
        <div className="absolute bottom-20 right-16 text-2xl opacity-30 animate-pulse delay-1000">🛰️</div>
        <div className="absolute top-1/2 left-10 text-4xl opacity-30 animate-pulse delay-500">🌌</div>
      </div>

      <div className="c-space relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-mint via-aqua to-lavender bg-clip-text text-transparent mb-4">
              Establish Contact
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-6">
              Open Communication Channel - Send a transmission across the galaxy
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-mint to-aqua mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-storm/80 via-navy/60 to-indigo/80 rounded-2xl p-8 border border-mint/30 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-aqua/5"></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-mint/20 to-aqua/20 border-2 border-mint/40 flex items-center justify-center mb-4">
                    <div className="text-3xl font-bold text-mint">YA</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{contactInfo.name}</h3>
                  <p className="text-mint font-medium">Frontend Developer</p>
                  <div className="space-y-2 text-neutral-300 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-aqua">📍</span>
                      <span>{contactInfo.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-mint">📞</span>
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lavender">✉️</span>
                      <span className="break-all">{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="text-aqua mr-3">🔗</span>
                  Communication Channels
                </h4>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className={`flex items-center p-4 bg-gradient-to-r ${link.color} bg-opacity-10 rounded-xl border border-neutral-700 ${link.hoverColor} backdrop-blur-sm transition-all duration-300 group`}
                  >
                    <div className="text-2xl mr-4">{link.icon}</div>
                    <div className="flex-1">
                      <h5 className="text-white font-semibold">{link.name}</h5>
                      <p className="text-neutral-400 text-sm">Click to connect</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Holographic Communicator Form */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-royal/80 via-lavender/60 to-storm/80 rounded-2xl p-8 border border-lavender/30 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-royal/5"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <span className="text-lavender mr-3">📡</span>
                    Holographic Transmitter
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-mint rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-aqua rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-lavender rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="field-label text-lavender">
                      Transmission Origin
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Identify yourself, traveler..."
                      className="field-input field-input-focus bg-midnight/50 border-lavender/30 focus-visible:ring-lavender/50 text-white placeholder-neutral-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="field-label text-lavender">
                      Galactic Coordinates
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@galaxy.space"
                      className="field-input field-input-focus bg-midnight/50 border-lavender/30 focus-visible:ring-lavender/50 text-white placeholder-neutral-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="field-label text-lavender">
                      Transmission Content
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Send a transmission from your star system..."
                      rows={5}
                      className="field-input field-input-focus bg-midnight/50 border-lavender/30 focus-visible:ring-lavender/50 text-white placeholder-neutral-500 resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-lavender to-royal rounded-lg text-white font-semibold 
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-lavender/25'}
                      transition-all duration-300 flex items-center justify-center space-x-2 border border-lavender/30`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>🚀</span>
                        <span>Send Transmission</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-lg border ${
                      submitStatus === 'success' 
                        ? 'bg-mint/10 border-mint/30 text-mint' 
                        : 'bg-coral/10 border-coral/30 text-coral'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <div className="flex items-center space-x-2">
                        <span>✅</span>
                        <span>Transmission received! Response incoming...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>❌</span>
                        <span>Transmission failed. Please try again...</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Holographic scan lines */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-lavender/30 to-transparent"
                  animate={{
                    y: [0, 400, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-navy/20 via-storm/10 to-indigo/20 rounded-2xl border border-aqua/20 backdrop-blur-sm"
          >
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-white mb-2">
              May the Force be with your projects
            </h3>
            <p className="text-neutral-300">
              Ready to embark on your next coding adventure? Let's build something extraordinary together.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;