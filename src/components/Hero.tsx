const Hero = () => (
  <section className="min-h-screen flex items-center relative pt-16">
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <div className="mb-8">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4">
            WILL GIGAN
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 gradient-text">
            Low-code • n8n • AI Automation Specialist
          </h2>
          <p className="text-xl text-[#8892b0] max-w-2xl">
            I help businesses automate workflows with n8n, AI, web scraping and custom API integrations. 
            Remote work with flexible pricing options.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#contact" className="btn-gradient px-8 py-4 rounded-full font-medium text-lg text-white">
            <i className="fas fa-paper-plane mr-2"></i> Get in Touch
          </a>
          <a href="#services" className="px-8 py-4 rounded-full font-medium text-lg border border-[#00d1ff] text-[#00d1ff] hover:bg-[#00d1ff]/10 transition-colors">
            <i className="fas fa-cogs mr-2"></i> Explore Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 