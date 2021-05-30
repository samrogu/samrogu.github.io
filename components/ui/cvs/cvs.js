import React from 'react';
import Summary from "./summary";
import resumen from '../../../data/cvs';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';

const Cvs = () => {
    return (<>
        <Summary data={resumen.summary} />
        <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resumen.experience && <Experience data={resumen.experience} />}
          {resumen.projects && <Projects data={resumen.projects} />}
        </div>
            <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
            {resumen.skills && <Skills data={resumen.skills} />}
            </div>
        </div>
    </>);
}

export default Cvs;