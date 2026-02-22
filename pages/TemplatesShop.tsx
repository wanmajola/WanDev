
import React, { useState, useMemo } from 'react';
import { TEMPLATES } from '../constants';
import { TechStack, Industry } from '../types';
import TemplateCard from '../components/TemplateCard';

type PriceRange = 'All' | '0-40' | '41-70' | '71-100' | '100+';
type SortOption = 'Newest' | 'Popular' | 'Price: Low to High' | 'Price: High to Low';

const TemplatesShop: React.FC = () => {
  const [techFilter, setTechFilter] = useState<string>('All');
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<PriceRange>('All');
  const [sortBy, setSortBy] = useState<SortOption>('Newest');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = ['All', ...Object.values(Industry)];
  const techStacks = ['All', ...Object.values(TechStack)];
  const priceRanges: PriceRange[] = ['All', '0-40', '41-70', '71-100', '100+'];
  const sortOptions: SortOption[] = ['Newest', 'Popular', 'Price: Low to High', 'Price: High to Low'];

  const filteredTemplates = useMemo(() => {
    let result = [...TEMPLATES];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Tech filter
    if (techFilter !== 'All') {
      result = result.filter(t => t.techStack === techFilter);
    }

    // Industry filter
    if (industryFilter !== 'All') {
      result = result.filter(t => t.industry === industryFilter);
    }

    // Price range filter
    if (priceRange !== 'All') {
      result = result.filter(t => {
        if (priceRange === '0-40') return t.price <= 40;
        if (priceRange === '41-70') return t.price > 40 && t.price <= 70;
        if (priceRange === '71-100') return t.price > 70 && t.price <= 100;
        if (priceRange === '100+') return t.price > 100;
        return true;
      });
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'Newest') return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      if (sortBy === 'Popular') return b.sales - a.sales;
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

    return result;
  }, [searchQuery, techFilter, industryFilter, priceRange, sortBy]);

  const clearFilters = () => {
    setTechFilter('All');
    setIndustryFilter('All');
    setPriceRange('All');
    setSortBy('Newest');
    setSearchQuery('');
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-12 animate-fade-in">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 dark:text-white">Templates Marketplace</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Browse our curated collection of production-ready digital assets. No demos, just high-fidelity designs and clean code.
          </p>
        </div>

        {/* Filters Top Bar */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Keyword Search</label>
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                <input 
                  type="text" 
                  placeholder="E.g. SaaS Dashboard"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all dark:text-white"
                />
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Technology</label>
              <select 
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:border-indigo-600 transition-all dark:text-white cursor-pointer"
              >
                {techStacks.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Industry</label>
              <select 
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:border-indigo-600 transition-all dark:text-white cursor-pointer"
              >
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Price Range ($)</label>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as PriceRange)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:border-indigo-600 transition-all dark:text-white cursor-pointer"
              >
                {priceRanges.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:border-indigo-600 transition-all dark:text-white cursor-pointer"
              >
                {sortOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
            <span className="text-xs font-medium text-slate-400">
              Showing <span className="text-indigo-600 font-bold">{filteredTemplates.length}</span> results
            </span>
            <button 
              onClick={clearFilters}
              className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-sync-alt"></i> Reset Filters
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTemplates.map(t => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 text-2xl mx-auto mb-6">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">No results matching your filters</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">Try broading your search or resetting the filters to find what you're looking for.</p>
            <button 
              onClick={clearFilters}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesShop;
