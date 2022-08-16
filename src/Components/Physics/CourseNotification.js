import React from 'react';
import { notification } from './Constant';

const CourseNotification = () => {
    return (
        <>
            <div className="notification overflow-y-auto shadow-lg px-4 pb-8">
                <h1 className='title_text course_notification sticky top-0 py-4'>Course Notification</h1>
                {
                    notification.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1 className={`inline-block mt-4 mb-2 course_notification_date w-fit px-4 py-1 rounded-full`}>16 June, 2022</h1>
                                <h1 className='course_notification_title w-fit font-medium cursor-pointer'>{item.title}</h1>
                                <small className=''>Student Name / 5 minute ago</small>
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