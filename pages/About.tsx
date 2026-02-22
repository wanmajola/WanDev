
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl font-extrabold mb-8 leading-tight">Empowering digital creators since 2020.</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              WanDev was founded by a team of frontend engineers and designers who were tired of bloated, 
              slow, and poorly-designed marketplace assets. We decided to create a home for high-quality, 
              performance-first templates that developers would actually enjoy using.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Today, WanDev is a trusted partner for over 10,000 developers and agencies worldwide, 
              providing the building blocks for the modern web.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/office1/600/800" className="rounded-2xl mt-8" alt="Office 1" />
            <img src="https://picsum.photos/seed/office2/600/800" className="rounded-2xl" alt="Office 2" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Quality First', desc: 'Every template is manually reviewed for code quality, design fidelity, and responsiveness.' },
              { title: 'Pure Assets', desc: 'No live demos or bloat. We provide clean screenshots and clean source files.' },
              { title: 'Global Support', desc: 'Our technical support team is distributed across 4 time zones to help you succeed.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl text-indigo-600 shadow-sm mx-auto mb-6 border border-slate-100 dark:border-slate-800">
                  <i className={`fas ${i === 0 ? 'fa-certificate' : i === 1 ? 'fa-box-open' : 'fa-globe'}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-16">The WanDev Mission</h2>
        <div className="max-w-3xl mx-auto bg-indigo-600 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-indigo-600/20">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed italic mb-8">
            "To simplify the web development process by providing accessible, high-performance design systems that bridge the gap between imagination and reality."
          </p>
          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
