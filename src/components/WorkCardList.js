import React from 'react';
import WorkCard from './WorkCard';
import workData from '../fixtures/work';

const WorkCardList = () => {

  return (
    <>
        <div className="mx-40 flex flex-col items-center">
            {workData.map((work) => (
            <WorkCard key={work.id} work={work} />
            ))}
        </div>
    </>
  );
};

export default WorkCardList;
