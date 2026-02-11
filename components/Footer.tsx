
import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            ARUL.DEV
          </span>
        </div>

        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by Arul Jothiarasu © 2024
        </p>

        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
