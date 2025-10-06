import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6">
<nav className="max-w-6xl mx-auto py-4">
  <Link to="/" className="text-emerald-500 hover:text-emerald-400">← Back to Home</Link>
</nav>
<div className="max-w-6xl mx-auto space-y-16">
        {/* Main Content */}
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Trelo Labs</h1>
          <p className="text-xl mb-8">
            At Trelo Labs, we're not just another digital agency — we're your product acceleration partner.
            Our team blends creativity, code, and strategy to turn bold ideas into market-ready digital experiences — faster than traditional agencies.
          </p>
          <p className="mb-8">
            We've helped startups and growing businesses ship stunning, scalable products in weeks, not months, with a focus on measurable results. 
            Whether it's a polished landing page, a high-performance web app, or a full-scale AI-powered product, our mission is simple:
            build things that matter, and make them perform beautifully.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">We believe in:</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500">⚡</span>
              <span><strong>Speed with quality:</strong> Launch faster without cutting corners.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500">🎯</span>
              <span><strong>Purpose-driven design:</strong> Every pixel and line of code should serve a goal.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500">🤝</span>
              <span><strong>Transparent collaboration:</strong> You'll always know what we're building and why.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500">📊</span>
              <span><strong>Growth mindset:</strong> We treat your success metrics as our own.</span>
            </li>
          </ul>
          
          <p className="mt-8 text-lg">
            If you're ready to turn your idea into something people love to use —
            <a 
              href="https://calendly.com/shyambalanagu724/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 ml-1"
            >
              book your free 30-minute consultation today
            </a> and see how fast we can make it real.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center">
              <img 
                src="/images/teja.jpg" 
                alt="Teja J" 
                className="w-48 h-48 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Teja J</h3>
              <p className="text-emerald-500">Full stack | ML</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center">
              <img 
                src="/images/shyam.jpg" 
                alt="Shyam B" 
                className="w-48 h-48 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Shyam B</h3>
              <p className="text-emerald-500">Full stack | App | AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
