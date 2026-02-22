
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-extrabold mb-8 leading-tight">Need help with a <span className="text-indigo-600">template</span>?</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-12">
            Whether you have questions about a license, need technical assistance, or just want to say hi, 
            our support team is ready to help. Most inquiries are answered within 24 hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 text-xl flex-shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Support</h4>
                <p className="text-slate-500 dark:text-slate-400">support@wandev.marketplace</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 text-xl flex-shrink-0">
                <i className="fas fa-life-ring"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Documentation Hub</h4>
                <p className="text-slate-500 dark:text-slate-400">Browse our detailed guides and setup tutorials.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 text-xl flex-shrink-0">
                <i className="fab fa-discord"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Discord Community</h4>
                <p className="text-slate-500 dark:text-slate-400">Join over 5k developers in our private community.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 p-8 md:p-12 shadow-xl shadow-slate-200/20">
          {isSent ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-slate-500">Thanks for reaching out. We'll get back to you shortly.</p>
              <button onClick={() => setIsSent(false)} className="mt-8 text-indigo-600 font-bold hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-indigo-600 transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-indigo-600 transition-all"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <select 
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-indigo-600 transition-all"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                >
                  <option value="">Select an option</option>
                  <option value="technical">Technical Support</option>
                  <option value="licensing">Licensing Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-indigo-600 transition-all"
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
