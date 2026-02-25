
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/wandev.png" alt="WanDev Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-tight dark:text-white">WanDev</span>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            WanDev provides premium React and WordPress templates designed to save you hundreds of development hours.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Marketplace</h4>
          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li><Link to="/templates" className="hover:text-indigo-600">All Templates</Link></li>
            <li><Link to="/categories" className="hover:text-indigo-600">Categories</Link></li>
            <li><Link to="/templates" className="hover:text-indigo-600">New Releases</Link></li>
            <li><Link to="/templates" className="hover:text-indigo-600">Top Rated</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Newsletter</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Get notified about new template drops.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-indigo-600"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} WanDev Marketplace. All rights reserved. Built for developers.
      </div>
    </footer>
  );
};

export default Footer;
