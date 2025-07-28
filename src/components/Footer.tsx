'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-[#233554]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl font-bold">
            <span className="text-[#00d1ff]">Will</span> <span className="text-white">Gigan</span>
          </div>
        </motion.div>
        <motion.p 
          className="text-[#8892b0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Low-code • n8n • AI Automation Specialist
        </motion.p>
        <motion.p 
          className="text-[#8892b0] mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Will Gigan. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 