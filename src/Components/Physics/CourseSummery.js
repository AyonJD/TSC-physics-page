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
        <div className="card single_card course_summery_card px-2 image-full mx-auto rounded-sm">
            <div className="card-body justify-end">
                <h2 className="card-title card_icon text-3xl mx-auto">{icon}</h2>
                <div className='text-center text-4xl font-bold card_counter' ref={countUpRef}></div>
                <p className='text-center text-xl font-medium initial_counter_detail'>{title}</p>
            </div>
        </div>


    );
};

export default CourseSummery;