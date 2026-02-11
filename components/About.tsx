
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Coffee } from 'lucide-react';
import { STATS } from '../constants';

const About: React.FC = () => {
  const iconMap: any = {
    Briefcase: <Briefcase className="w-6 h-6 text-purple-400" />,
    CheckCircle: <CheckCircle className="w-6 h-6 text-cyan-400" />,
    Users: <Users className="w-6 h-6 text-emerald-400" />,
    Coffee: <Coffee className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Part */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-md"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative glass p-4 rounded-[2rem]">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
                alt="Arul Jothiarasu" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full"
              />
            </div>
          </motion.div>

          {/* Content Part */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Fresh Perspective, <span className="gradient-text">Focused</span> Learning
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                I am a fresher from Sri Manakula Vinayagar Engineering College with a strong interest in web development and software engineering. I am currently pursuing my B.Tech in Computer Science and Engineering with a focus on Business Systems.
              </p>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                My goal is to become a skilled Full Stack Developer and work on real-world projects that make a difference. I am constantly exploring new technologies to build robust and user-friendly digital experiences.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-6 rounded-2xl text-center hover:border-white/20 transition-colors"
                  >
                    <div className="flex justify-center mb-3">
                      {iconMap[stat.icon]}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
