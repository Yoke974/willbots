const LinkedInPost = () => (
  <section id="linkedin" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Latest LinkedIn Post</h2>
          <p className="text-[#8892b0]">My thoughts on automation and AI</p>
        </div>
        <div className="linkedin-container p-6">
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00d1ff]">
              <img src="https://media.licdn.com/dms/image/D4E03AQHdK8vJvSXmJQ/profile-displayphoto-shrink_400_400/0/1709661841312?e=1723075200&v=beta&t=GvzFhWk4JxJgHjQdU9uG7UxQJ6VbQx0Z9X0l0Z0Qj0Y" alt="Will Gigan" className="w-full h-full object-cover" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Will Gigan</h3>
              <p className="text-[#8892b0]">Low-code • n8n • AI Automation Specialist</p>
              <p className="text-[#8892b0] text-sm mt-1">1 week ago • 5 min read</p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Automation with n8n and OpenAI</h3>
            <div className="prose prose-invert max-w-none text-[#e6f1ff]">
              <p>In today&apos;s fast-paced business environment, automation has become a necessity rather than a luxury. With tools like n8n and OpenAI, we can create powerful workflows that transform how businesses operate.</p>
              <p className="my-4">Imagine automatically processing customer inquiries, summarizing reports, extracting data from websites, and integrating all your business apps without manual intervention. This is the power of modern automation.</p>
              <p>I recently implemented a solution for a client that reduced their data processing time from 4 hours daily to just 15 minutes. By combining n8n&apos;s powerful workflow automation with OpenAI&apos;s natural language processing, we created a system that:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automatically scrapes data from multiple sources</li>
                <li>Processes and analyzes the data using AI</li>
                <li>Generates comprehensive reports</li>
                <li>Distributes insights to relevant teams via Slack and email</li>
              </ul>
              <p className="mt-4">The result? Increased productivity, reduced errors, and more time for strategic thinking.</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#233554]">
            <div className="flex space-x-4 text-[#8892b0]">
              <span><i className="far fa-heart mr-1"></i> 42</span>
              <span><i className="far fa-comment mr-1"></i> 8</span>
              <span><i className="far fa-share-square mr-1"></i> 12</span>
            </div>
            <a href="https://www.linkedin.com/posts/will-gigan-639721376_automation-n8n-openai-activity-7353847833554284545-iSAi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF0C4E0BAs-92KguN0lY0orNqxQitbRL_2E" target="_blank" className="text-[#00d1ff] hover:text-[#6e00ff] transition-colors">
              Read full post on LinkedIn <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LinkedInPost; 