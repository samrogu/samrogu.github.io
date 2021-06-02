import React from 'react';
import Summary from "./summary";

import Skills from './skills';
import Experience from './experience';
import Projects from './projects';

const Cvs = ({resumen}) => {
    return (<>
        {resumen.skills && <Skills data={resumen.skills} />}
        {/* <div className="relative -mt-12 lg:-mt-24">
            <div className="lg:w-2/3 lg:pr-8">
                {resumen.experience && <Experience data={resumen.experience} />}
                {resumen.projects && <Projects data={resumen.projects} />}
            </div>
            <div>
               
            </div>
            
        </div> */}
        
    </>);
}

export default Cvs;