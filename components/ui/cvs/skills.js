import React from 'react';
import Progress from './progress';
import ListItem from './list_item';

const Skills = ({ data }) => (
  <section className="border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12 lg:flex-row justify-center">
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">Skills</h1>
    {data.map(skill => (
      <div key={skill.title} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
        {skill.type === 'percent' && (
              <h1 className="">
              {skill.title}
            </h1>
            )}
        {skill.subskills.map(subskill => (
          <span key={subskill.name}>
            {skill.type === 'percent' && (
              <Progress name={subskill.name} percent={subskill.percent} />
            )}
            
            {/* {skill.type === 'tag' && (
              <span key={subskill.name} className="tag">
                {subskill.name}
              </span>
            )}
            {skill.type === 'list' && (
              <ListItem key={subskill.name} text={subskill.name} />
            )} */}
            
          </span>
        ))}
          </div>
      </div>
    ))}
    </div>
    
  </section>
);

export default Skills;