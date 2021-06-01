import React from 'react';

const Summary = ({ data }) => (
    <section className="py-5 border-b border-neutral-300 lg:flex items-center">
        <div className="my-5">
            <img
                className="rounded-full mx-auto profileImage"
                src="./profile.jpg"
                alt="profile"
            />
        </div>
        <div className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
            <h1 className="my-4 text-5xl font-bold leading-tight">{data.profession}</h1>
            <p className="leading-normal text-2xl mb-8">{data.description}</p>
        </div>
    </section>
);

export default Summary;