
import React from 'react';
import { Link } from 'react-router-dom';
import { Template, TechStack } from '../types';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      {/* Thumbnail Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={template.images[0]}
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-indigo-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-10">
          <Link 
            to={`/templates/${template.id}`} 
            className="px-6 py-2.5 bg-white text-indigo-600 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Preview Screenshots
          </Link>
          <Link 
            to={`/templates/${template.id}`}
            className="text-white text-xs font-semibold hover:underline"
          >
            View Full Details
          </Link>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm ${
            template.techStack === TechStack.REACT 
              ? 'bg-blue-500 text-white' 
              : 'bg-sky-600 text-white'
          }`}>
            {template.techStack}
          </span>
          {template.isNew && (
            <span className="px-2.5 py-1 bg-green-500 text-white rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
              New
            </span>
          )}
        </div>
        
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded text-[10px] font-bold uppercase tracking-wider">
            {template.industry}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-base leading-tight dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-1">
            {template.title}
          </h3>
          <span className="text-lg font-bold text-indigo-600">${template.price}</span>
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 mb-4 flex-grow">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
          <div className="flex items-center gap-1.5 text-xs">
            <div className="flex text-yellow-500">
              <i className="fas fa-star"></i>
            </div>
            <span className="font-bold dark:text-white">{template.rating}</span>
            <span className="text-slate-400 font-medium">({template.sales} sales)</span>
          </div>
          <Link 
            to={`/templates/${template.id}`}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/btn"
          >
            Details <i className="fas fa-chevron-right text-[10px] transform group-hover/btn:translate-x-0.5 transition-transform"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
