import React from 'react';
import CourseNotification from '../Physics/CourseNotification';
import CourseImage from '../../assets/Ellipse-18.svg';

const TeacherProfile = () => {
    return (
        <div className="container py-10 mx-auto">
            <div className="course_banner py-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="subject md:max-h-[448px] bg-white shadow-lg px-4 md:px-5 py-8 ">
                    <h1 className='text-4xl text-[#042954] font-semibold mb-6'>Teacher Profile</h1>


                    <div className="images relative flex-col flex justify-center items-center">
                        <div className='text-center'>
                            <img className='lg:w-1/2 sm:w-2/3 w-full mx-auto' src={CourseImage} alt="" />
                            <h1 className='text-[#042954] font-bold text-xl mt-4 mb-2'>User Name</h1>
                            <h1 className='text-[#042954] font-medium'>Organization Name</h1>
                            <h1 className='text-[#042954] font-medium'>Teacher@gmail.com</h1>
                        </div>

                    </div>
                </div>
                <CourseNotification />
            </div>
        </div>
    );
};

export default TeacherProfile;