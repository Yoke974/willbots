'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwlpvab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Contact Me</h2>
            <p className="text-[#8892b0]">Let&apos;s discuss how I can help automate your business</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#1a1f2e] p-8 rounded-xl border border-[#00d4ff]/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-[#0a0f1c] border border-[#00d4ff]/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-[#0a0f1c] border border-[#00d4ff]/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-white">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-[#0a0f1c] border border-[#00d4ff]/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] text-white"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full text-white py-3 rounded-lg font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div 
                  className="text-green-400 text-center p-3 bg-green-900/20 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="text-red-400 text-center p-3 bg-red-900/20 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
            
            <div className="mt-8 pt-8 border-t border-[#00d4ff]/20">
              <div className="flex flex-col items-center">
                <p className="text-[#8892b0] mb-4">Or contact me directly</p>
                <div className="flex space-x-6">
                  <a href="mailto:willgigan244@gmail.com" className="text-[#8892b0] hover:text-[#00d4ff] transition-colors text-2xl">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/will-gigan-639721376/" target="_blank" className="text-[#8892b0] hover:text-[#00d4ff] transition-colors text-2xl">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 