
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <p className="text-slate-400">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 italic">Ready to build something amazing together?</h3>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="p-4 glass rounded-2xl text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase font-bold tracking-widest">Email Me</div>
                  <div className="text-white text-lg font-medium">hello@alexsterling.dev</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 glass rounded-2xl text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase font-bold tracking-widest">Call Me</div>
                  <div className="text-white text-lg font-medium">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 glass rounded-2xl text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase font-bold tracking-widest">Location</div>
                  <div className="text-white text-lg font-medium">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-4 glass rounded-2xl text-slate-400 hover:text-white transition-all hover:scale-110">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[3rem] relative"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-20 h-20 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Subject</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Project Opportunity"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Your Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="How can I help you?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
