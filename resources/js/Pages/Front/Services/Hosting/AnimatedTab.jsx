import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid'

const tabs = [
  { id: 'tab1', label: 'Linux Hosting' },
  { id: 'tab2', label: 'Windows Hosting' },
  { id: 'tab3', label: 'Backup Hosting' },
];

const tabContent = {
  tab1: <motion.div transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}>
            <p className="text-2xl font-bold text-white sm:text-3xl my-4">
                Technical Description
            </p>
            <p>Linux hosting is provided using the stable Linux operating system alongside a variety of features for PHP/MySQL applications with optimized service configurations, eliminating the concerns of website owners</p>
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
            <sapn className="inline">Linux hosting</sapn> <br />
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
            <sapn className="inline">Linux hosting</sapn> <br />
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
            <sapn className="inline">Linux hosting</sapn> <br />
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
        
        </motion.div>,
  tab2: <motion.div transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}>
            <p className="text-2xl font-bold text-white sm:text-3xl my-4">
              Technical Description
            </p>
            <p>Windows hosting at Mihan Hosting is offered with the best quality and highest uptime. The operating system for this hosting is Windows Server 2008 and 2012, supporting all components of programming languages like ASP, ASP.NET, etc. If your website is designed with ASP, it cannot be supported by Linux hosting and you must use Windows hosting</p>
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
            <sapn className="inline">Windows hosting</sapn> <br />
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
            <sapn className="inline">Windows hosting</sapn> <br />
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
            <sapn className="inline">Windows hosting</sapn> <br />
            <CheckIcon aria-hidden="true"  className=" h-6 w-5 flex-none inline mx-2" /> 
        </motion.div>,
        
  tab3: <motion.div transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}>
        <p className="text-2xl font-bold text-white sm:text-3xl my-4">
        Technical Description
        </p>
        Backup hosting .
    </motion.div>,
 
};

function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="relative flex flex-col items-center">
         <p className="mt-10 text-3xl font-bold text-white sm:text-4xl my-16">
            Learn more about hosting services
        </p>
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-2 px-2 font-medium rounded-t-lg ${
              activeTab === tab.id ? 'text-indigo-500 secondary' : 'text-white bg-indigo-500'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="underline"
                className="block inset-0 h-1 bg-indigo-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="secondary rounded-lg p-4 min-h-80 w-full">
        {tabContent[activeTab]} 
      </div>
    </div>
  );
}

export default AnimatedTabs;