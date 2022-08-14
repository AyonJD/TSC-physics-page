import React from 'react';
import { notification } from './Constant';

const CourseNotification = () => {
    return (
        <>
            <div className="notification max-h-[448px] overflow-y-auto bg-white shadow-lg px-4 md:px-5 pb-8">
                <h1 className='title_text sticky top-0 md:py-8 py-4 bg-white'>Course Notification</h1>
                {
                    notification.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1 className={`inline-bloxk mt-4 mb-2 text-white bg-accent w-fit px-4 py-1 rounded-full`}>16 June, 2022</h1>
                                <h1 className='text-secondary w-fit font-medium hover:underline cursor-pointer'>{item.title}</h1>
                                <small className='text-[#646464]'>Student Name / 5 minute ago</small>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default CourseNotification;