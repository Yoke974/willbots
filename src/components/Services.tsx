'use client';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: "fas fa-project-diagram",
      title: "Workflow Automation",
      description: "Building automated workflows with n8n to optimize your business processes and increase efficiency."
    },
    {
      icon: "fas fa-globe",
      title: "Web Scraping",
      description: "Data collection and structuring from the web to power your analytics and business intelligence."
    },
    {
      icon: "fas fa-brain",
      title: "AI Summarization",
      description: "Content synthesis and analysis using AI to save time and extract valuable insights from large datasets."
    },
    {
      icon: "fas fa-plug",
      title: "API Integrations",
      description: "Connecting your apps and services through custom APIs to create seamless workflows between systems."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Services</h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">Custom solutions to automate and optimize your business processes</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-glow bg-[#334155] p-8 rounded-xl border border-[#475569]"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="icon-container">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#8892b0]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 