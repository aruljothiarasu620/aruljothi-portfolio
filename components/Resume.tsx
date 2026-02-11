
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { TIMELINE } from '../constants';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <p className="text-slate-400">Education, experience, and professional milestones.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-[#030014] z-10" />

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-8`}>
                  <div className="glass p-8 rounded-3xl hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-purple-400 uppercase tracking-widest">
                        {item.period}
                      </span>
                      {item.type === 'experience' && <Briefcase className="w-5 h-5 text-slate-500" />}
                      {item.type === 'education' && <GraduationCap className="w-5 h-5 text-slate-500" />}
                      {item.type === 'certification' && <Award className="w-5 h-5 text-slate-500" />}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium mb-4">{item.company}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors">
              Download Full Resume PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
