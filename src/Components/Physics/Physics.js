import React from 'react';
import CourseImage from '../../assets/Ellipse-18.svg'
import InsImage from '../../assets/Ellipse-19.svg'

const Physics = () => {
    const notification = [
        {
            button: "secondary",
            title: "Enrollment request for class 9-10 physics",
            notificationTimer: "Student Name / 5 minute ago",
        },
        {
            button: "accent",
            title: "Exam Schedule 8.30 am for class 9-10 physics",
            notificationTimer: "Student Name / 5 minute ago",
        },
        {
            button: "neutral",
            title: "Class Schedule 10.30 am for class 9-10 physics",
            notificationTimer: "Student Name / 5 minute ago",
        },
    ]

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold text-[#042954] py-8'>Course <span className='text-4xl'>&#8688;</span> Physics</h1>
            <div className="course_banner grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="subject bg-white px-4 py-8 pb-28">
                    <h1 className='text-6xl text-[#042954] font-semibold mb-6'>Physics</h1>
                    <div className="flex">
                        <div className="content">
                            <h1 className='title_text'>Class 9-10</h1>
                            <h1 className='title_text'>CC - LoRIV</h1>
                            <h1 className='title_text'>Rating 4.5/5</h1>
                            <h1 className='title_text mt-16'>@Teacher Institute Email</h1>
                        </div>
                        <div className="images relative flex-col flex justify-center items-center">
                            <div>
                                <img className='w-1/2 mx-auto' src={CourseImage} alt="" />
                                <img className='w-1/4 absolute bottom-0 right-1/4' src={InsImage} alt="" />
                            </div>
                            <button className='absolute btn btn-primary btn-md right-16 -bottom-24'>Start Class</button>
                        </div>
                    </div>
                </div>
                <div className="notification bg-white px-4 py-8">
                    <h1 className='title_text'>Course Notification</h1>
                    {
                        notification.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1 className={`inline-bloxk mt-4 mb-2 text-white bg-${item.button} w-fit px-4 py-1 rounded-full`}>16 June, 2022</h1>
                                    <h1 className='text-secondary font-medium hover:underline cursor-pointer'>{item.title}</h1>
                                    <small>Student Name / 5 minute ago</small>
                                    <hr />
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
};

export default Physics;