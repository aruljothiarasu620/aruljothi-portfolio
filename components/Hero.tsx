
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';

const roles = ['Aspiring Full Stack Developer', 'Computer Science Student', 'Web Enthusiast', 'Software Engineer'];

const Hero: React.FC = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting 
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-purple-400 font-medium mb-4 block tracking-widest text-sm md:text-base">
            HI, I'M
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
            Arul <span className="gradient-text">Jothiarasu</span>
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-3xl font-medium text-slate-300">
              An <span className="text-white border-r-2 border-purple-500 pr-1">{displayText}</span>
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            Passionate about building clean and user-friendly web applications. 
            I enjoy learning new technologies and building responsive websites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { Icon: Github, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' }
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + (idx * 0.1) }}
                className="p-3 glass rounded-xl text-slate-400 hover:text-white hover:scale-110 transition-all"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
