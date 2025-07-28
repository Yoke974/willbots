'use client';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Pricing & Availability</h2>
            <p className="text-[#8892b0]">Flexible options to suit your business needs</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#334155] p-8 rounded-xl border border-[#475569] shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="text-lg text-[#8892b0]">Starting from</div>
                <div className="text-4xl font-bold gradient-text">$30/hour</div>
                <p className="text-[#8892b0] mt-2">Flexible engagement models</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <i className="fas fa-laptop-house text-[#3B82F6] text-xl mr-2"></i>
                  <span>Remote Work</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar-check text-[#FF4D4D] text-xl mr-2"></i>
                  <span>Flexible Availability</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="#contact" className="btn-gradient inline-block text-white px-8 py-3 rounded-full font-medium text-lg">
                Discuss Your Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 