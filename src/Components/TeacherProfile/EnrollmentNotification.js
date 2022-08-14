import React from 'react';
import { enrollmentNotification } from '../Physics/Constant';

const EnrollmentNotification = () => {
    return (
        <>
            <div className="notification max-h-[448px] overflow-y-auto bg-white shadow-lg px-4 md:px-5 pb-8">
                <h1 className='title_text sticky top-0 md:pt-8 py-4 bg-white'>Enrollment Request</h1>
                {
                    enrollmentNotification.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1 className='text-[#324D90] text-md font-medium my-4'>Enrollment Request</h1>
                                <div className='flex justify-between items-enter'>
                                    <div className='flex items-center'>
                                        <img className='w-12' src={item.studentImage} alt="" />
                                        <div className='ml-5'>
                                            <h1 className='text-[#324D90] text-xl font-bold'>{item.studentName}</h1>
                                            <h1 className='text-[#324D90] text-md'>{item.studentID}</h1>
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <button className='btn-accent py-1 w-[80px] lg:mb-0 md:mb-2 sm:mb-0 mb-2 md:w-[100px] rounded-full'>Deny</button>
                                        <button className='btn-secondary py-1 w-[80px] md:w-[100px] ml-4 rounded-full'>Approve</button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mt-2'>
                                    <small className='text-[#646464]'>{item.studentClass}</small>
                                    <small className='text-[#646464]'>{item.studentSubject}</small>
                                    <small className='text-[#646464]'>{item.notificationTimer}</small>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default EnrollmentNotification;