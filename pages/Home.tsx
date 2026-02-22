
import React from 'react';
import { Link } from 'react-router-dom';
import { TEMPLATES } from '../constants';
import TemplateCard from '../components/TemplateCard';

const Home: React.FC = () => {
  const featured = TEMPLATES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New React Templates Available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Build Faster with <span className="text-indigo-600">Premium</span><br />Digital Assets.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            High-quality WordPress and React templates for developers, agencies, and freelancers who value clean code and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/templates" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-600/20">
              Browse Marketplace
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:border-indigo-600 transition-all">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Background Decors */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 -right-1/4 w-[400px] h-[400px] bg-purple-400 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Templates</h2>
            <p className="text-slate-500 dark:text-slate-400">Hand-picked premium assets for your next project.</p>
          </div>
          <Link to="/templates" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map(t => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Categories</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Focus on the tech you love. We provide assets tailored for React, WordPress, and more.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fab fa-react', label: 'React JS', count: 124, color: 'text-blue-400' },
              { icon: 'fab fa-wordpress', label: 'WordPress', count: 86, color: 'text-sky-600' },
              { icon: 'fas fa-shopping-cart', label: 'E-Commerce', count: 42, color: 'text-green-500' },
              { icon: 'fas fa-rocket', label: 'SaaS Pages', count: 68, color: 'text-purple-500' }
            ].map((cat, i) => (
              <Link key={i} to="/categories" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-600 transition-all hover:shadow-md group">
                <div className={`${cat.color} text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={cat.icon}></i>
                </div>
                <h3 className="font-bold text-lg mb-1">{cat.label}</h3>
                <p className="text-slate-400 text-sm font-medium">{cat.count} Templates</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WanDev */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Built by Developers,<br />For Developers.</h2>
            <div className="space-y-8">
              {[
                { title: 'Clean Architecture', desc: 'Our templates follow industry best practices and modular architecture.' },
                { title: 'High Performance', desc: 'Optimized for speed out of the box. Zero bloat, maximum efficiency.' },
                { title: 'Lifetime Updates', desc: 'Purchase once, get access to all future updates for that product.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex-shrink-0 flex items-center justify-center text-indigo-600 text-xl">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/code/800/800" alt="Code mockup" className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-10 -left-10 bg-indigo-600 text-white p-8 rounded-2xl hidden lg:block">
              <div className="text-4xl font-bold mb-1">10k+</div>
              <div className="text-sm font-medium opacity-80">Downloads Globally</div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="bg-indigo-600 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to start your project?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of developers using WanDev templates to ship projects faster and delight clients.</p>
            <Link to="/templates" className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors inline-block">
              Start Shopping Now
            </Link>
          </div>
          {/* Abstract background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-10 -mb-10"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
