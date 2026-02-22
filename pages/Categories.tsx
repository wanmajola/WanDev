
import React from 'react';
import { Link } from 'react-router-dom';
import { TechStack, Industry } from '../types';

const Categories: React.FC = () => {
  {/* Updated categoriesList to use TechStack and Industry enums instead of the non-existent Category member */}
  const categoriesList = [
    { type: TechStack.REACT, icon: 'fab fa-react', color: 'bg-blue-500', desc: 'Modern, component-driven UI kits for Next.js and CRA projects.' },
    { type: TechStack.WORDPRESS, icon: 'fab fa-wordpress', color: 'bg-sky-600', desc: 'Professional themes for the world\'s most popular CMS.' },
    { type: Industry.SAAS, icon: 'fas fa-rocket', color: 'bg-indigo-600', desc: 'Conversion-ready landing pages for software products.' },
    { type: Industry.E_COMMERCE, icon: 'fas fa-shopping-bag', color: 'bg-green-600', desc: 'Storefronts designed to sell with optimized checkout flows.' },
    { type: Industry.PORTFOLIO, icon: 'fas fa-user-circle', color: 'bg-purple-600', desc: 'Elegant templates for creatives to showcase their best work.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Browse by Technology</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Filter our library of premium assets by the tech stack or use case that fits your next big project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoriesList.map((cat, i) => (
          <Link 
            key={i} 
            to="/templates"
            className="group relative h-[400px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-10 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
              <img 
                src={`https://picsum.photos/seed/cat${i}/800/1000`} 
                alt={cat.type}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 text-white">
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-xl`}>
                <i className={cat.icon}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4">{cat.type}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                {cat.desc}
              </p>
              <span className="inline-flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                Explore Collection <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        ))}
        
        {/* Newsletter / CTA card */}
        <div className="bg-slate-900 rounded-[2rem] flex flex-col justify-center items-center text-center p-12 border border-slate-800">
           <div className="text-slate-400 text-5xl mb-8">
             <i className="fas fa-plus-circle"></i>
           </div>
           <h3 className="text-white text-2xl font-bold mb-4">Request a Category</h3>
           <p className="text-slate-400 text-sm mb-8">Missing something? Tell us what templates you want to see next.</p>
           <Link to="/support" className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
             Contact Us
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
