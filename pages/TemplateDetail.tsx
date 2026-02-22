
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TEMPLATES } from '../constants';

const TemplateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const template = TEMPLATES.find(t => t.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!template) {
    return <Navigate to="/templates" />;
  }

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/templates" className="text-slate-500 hover:text-indigo-600 text-sm font-medium flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Marketplace
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Images */}
        <div className="lg:col-span-8">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-6 aspect-video">
            <img 
              src={template.images[activeImage]} 
              alt={template.title} 
              className="w-full h-full object-cover transition-opacity duration-300" 
            />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {template.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? 'border-indigo-600' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">About this template</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {template.description} This asset is designed for maximum efficiency and ease of use. 
                Whether you're building for a client or launching your own product, this theme provides 
                the aesthetic and technical foundation you need.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {template.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <i className="fas fa-check-circle text-indigo-500"></i>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-indigo-600/5 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-indigo-600"></i> Marketplace Notice
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This platform does not provide live previews. The screenshots above represent the high-fidelity UI you will receive in the source files. 
                Full documentation is included in the download package.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Purchase Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Standard License</span>
                <span className="text-4xl font-bold text-indigo-600">${template.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Commercial use allowed',
                  'One end product',
                  'Lifetime updates',
                  '6 months tech support',
                  'Clean source files'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <i className="fas fa-check text-green-500"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 mb-4">
                Add to Cart
              </button>
              <button className="w-full py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-indigo-600 transition-all">
                Buy Now
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                Secure checkout with Stripe & PayPal.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <h4 className="font-bold mb-4">Product Specs</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Last Update</span>
                  <span className="font-bold">{template.lastUpdated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Released</span>
                  <span className="font-bold">May 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Category</span>
                  {/* Changed template.category to template.industry as category property does not exist on Template */}
                  <span className="font-bold text-indigo-600">{template.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Sales</span>
                  <span className="font-bold">{template.sales}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                {template.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-slate-900 rounded text-[10px] uppercase font-bold text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;
