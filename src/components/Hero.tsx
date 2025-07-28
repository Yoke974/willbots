'use client';

const Hero = () => (
  <>
    <section className="min-h-screen flex items-center relative pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl hero-content">
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
            <a href="#services" className="px-8 py-4 rounded-full font-medium text-lg border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors">
              <i className="fas fa-cogs mr-2"></i> Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonial Section */}
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Real Results</h2>
            <p className="text-[#8892b0]">See how automation transforms businesses</p>
          </div>
          
          <div className="testimonial">
            <blockquote>
              "The AI agent saves me 4h/day - I now manage everything by voice command from my tractor!"
              <cite>Livestock Farmer</cite>
            </blockquote>
            
            <div className="testimonial-content">
              <p><strong>Problem:</strong> "20+ daily emails buried critical alerts about animal transports."</p>
              <p><strong>Solution:</strong> N8N workflow that:</p>
              <ul>
                <li>Reads emails and extracts key info</li>
                <li>Sends vocal WhatsApp alerts <i>("100 cattle shipment - URGENT - Documents filed")</i></li>
                <li>Auto-responds to common queries</li>
              </ul>
              <p><strong>Results:</strong> ✅ 4h/day saved ✅ Zero missed alerts</p>
            </div>
            
            <div className="proof-images">
              <div className="relative">
                <img 
                  src="/images/whatsapp-notifications.webp" 
                  alt="WhatsApp automated notifications showing transport alerts" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%231a1f2e'/%3E%3Ctext x='150' y='90' text-anchor='middle' fill='%2300d4ff' font-size='12' font-family='Arial'%3EWhatsApp%3C/text%3E%3Ctext x='150' y='110' text-anchor='middle' fill='%23F8FAFC' font-size='10' font-family='Arial'%3ENotifications%3C/text%3E%3C/svg%3E";
                  }}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="relative">
                <img 
                  src="/images/n8n-workflow.webp" 
                  alt="N8N automation workflow with AI and WhatsApp integration" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%231a1f2e'/%3E%3Ctext x='150' y='90' text-anchor='middle' fill='%2300d4ff' font-size='14' font-family='Arial'%3EN8N%3C/text%3E%3Ctext x='150' y='110' text-anchor='middle' fill='%23F8FAFC' font-size='10' font-family='Arial'%3EWorkflow%3C/text%3E%3C/svg%3E";
                  }}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="relative">
                <img 
                  src="/images/mcp-server.webp" 
                  alt="MCP Server dashboard showing organized workflows and automations" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%231a1f2e'/%3E%3Ctext x='150' y='90' text-anchor='middle' fill='%2300d4ff' font-size='12' font-family='Arial'%3EMCP Server%3C/text%3E%3Ctext x='150' y='110' text-anchor='middle' fill='%23F8FAFC' font-size='10' font-family='Arial'%3EDashboard%3C/text%3E%3C/svg%3E";
                  }}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero; 