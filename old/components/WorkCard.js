// src/components/WorkCard.js

import React from 'react';

const WorkCard = ({ work }) => {
  return (
    <div className="shadow-md w-full p-4 mb-6 border rounded-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:ring-16 hover:ring-white hover:ring-opacity-20">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-purple-900">{work.title}</h2>
          <h3 className="pt-1 font-bold text-md text-slate-700">{work.company}</h3>
        </div>
        <p className="text-sm text-slate-500">{work.date_from} - {work.date_to}</p>
      </div>
      <p className="mt-2 text-slate-600">{work.description}</p>
    </div>
  );
};

export default WorkCard;
