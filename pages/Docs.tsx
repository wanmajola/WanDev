
import React from 'react';

const Docs: React.FC = () => {
  const sections = [
    { title: 'Getting Started', items: ['Introduction', 'Prerequisites', 'File Structure', 'Installation'] },
    { title: 'React Guides', items: ['Environment Setup', 'Component Library', 'Customization', 'State Management'] },
    { title: 'WordPress Guides', items: ['Theme Activation', 'Importing Demo Data', 'Customizer Options', 'Plugin Setup'] },
    { title: 'Deployment', items: ['Static Hosting', 'Vercel / Netlify', 'Live Server Setup'] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 animate-fade-in">
      {/* Sidebar Navigation */}
      <aside className="lg:w-1/4 h-fit sticky top-24">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <button className={`text-sm font-medium transition-colors ${j === 0 && i === 0 ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600'}`}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:w-3/4 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 md:p-12 min-h-[600px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-8">Documentation Introduction</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
            Welcome to the WanDev documentation hub. Every template in our marketplace comes with its own specific 
            technical documentation, but these guides cover the general workflow for most of our assets.
          </p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Initial Setup</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                After purchasing a template, you will receive a ZIP file. Unzip this file to reveal the source code and assets.
              </p>
              <div className="bg-slate-900 rounded-xl p-6 text-indigo-400 font-mono text-sm">
                <p># Navigate to project folder</p>
                <p>cd my-template-folder</p>
                <p className="mt-4"># Install dependencies</p>
                <p>npm install</p>
                <p className="mt-4"># Start development server</p>
                <p>npm run dev</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Environment Requirements</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                To ensure your templates run smoothly, please check that you have the following installed:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 font-medium ml-4">
                <li>Node.js v18.0.0 or higher</li>
                <li>npm v8.0.0 or Yarn / pnpm</li>
                <li>WordPress v6.0 or higher (for WP templates)</li>
                <li>PHP v7.4+ (for WP templates)</li>
              </ul>
            </section>

            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 rounded-r-2xl">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Need project-specific help?</h4>
              <p className="text-indigo-800 dark:text-indigo-300/80 text-sm">
                Each download includes a <code>README.md</code> or <code>DOCS.pdf</code> tailored specifically to that product. 
                Check that folder for individual component documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
