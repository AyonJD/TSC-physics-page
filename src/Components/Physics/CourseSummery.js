import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const CourseSummery = ({ icon, end, title, image }) => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: end,
        duration: 5,
    });
    return (
        <div className="card lg:w-62 md:z-30 bg-white image-full mx-auto rounded-sm">
            <div className="card-body">
                <h2 className="card-title md:text-5xl text-3xl mx-auto text-base-100">{icon}</h2>
                <div className='text-center text-4xl font-bold text-base-100' ref={countUpRef}></div>
                <p className='text-center md:text-2xl text-xl font-medium text-base-100'>{title}</p>
            </div>
        </div>


    );
};

export default CourseSummery;