import React from 'react';
import CourseImage from '../../assets/Ellipse-18.svg'
import InsImage from '../../assets/Ellipse-19.svg'
import CourseSummery from './CourseSummery';
import { IoIosPeople } from 'react-icons/io';
import { BsBookHalf } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';
import { RiErrorWarningFill } from 'react-icons/ri';

const Physics = () => {
    const notification = [
        {
            buttonColor: "secondary",
            title: "Enrollment request for class 9-10 physics",
            notificationTimer: "Student Name / 5 minute ago",
        },
        {
            buttonColor: "accent",
            title: "Exam Schedule 8.30 am for class 9-10 physics",
            notificationTimer: "Student Name / 5 minute ago",
        },
        {
            buttonColor: "neutral",
            title: "Class Schedule 10.30 am for class 9-10 physics",
            notificationTimer: "Student Name / 5 minute ago",
        },
    ];
    const counterCardDara = [
        {
            title: "Course Students",
            icon: <IoIosPeople></IoIosPeople>,
            end: 23,
        },
        {
            title: "Course Chapters",
            icon: <BsBookHalf></BsBookHalf>,
            end: 12,
        },
        {
            title: "Course Activity",
            icon: <FiActivity></FiActivity>,
            end: 40,
        },
    ];

    const noticeBoardData = [
        {
            buttonData: "No exams",
            buttonColor: "secondary",
            details: "No exam will be taken next thursday.",
            timing: "5 minute ago",
            icon: <RiErrorWarningFill></RiErrorWarningFill>
        },
        {
            buttonData: "Extra Class",
            buttonColor: "secondary",
            details: "Extra class will be held 29th aug 10 am",
            timing: "1 hour ago",
            icon: <RiErrorWarningFill></RiErrorWarningFill>
        },
        {
            buttonData: "Extra Class",
            buttonColor: "warning",
            details: "Mid exam will be taken thursday. & The syllabus: & -> Chapter 10 all & -> CHapter three",
            timing: "2 days ago",
            icon: <RiErrorWarningFill></RiErrorWarningFill>
        },
    ]

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold text-[#042954] py-8'>Course <span className='text-4xl'>&#8688;</span> Physics</h1>
            <div className="course_banner grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="subject bg-white shadow-lg px-4 md:px-5 py-8 pb-28">
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
                                <img className='lg:w-1/2 sm:w-2/3 w-full mx-auto' src={CourseImage} alt="" />
                                <img className='lg:w-1/4 md:bottom-5 sm:-bottom-5 sm:w-1/3 w-1/2 absolute bottom-0 right-1/4' src={InsImage} alt="" />
                            </div>
                            <button className='absolute btn btn-primary btn-md right-16 -bottom-24'>Start Class</button>
                        </div>
                    </div>
                </div>
                <div className="notification bg-white shadow-lg px-4 md:px-5 py-8">
                    <h1 className='title_text'>Course Notification</h1>
                    {
                        notification.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1 className={`inline-bloxk mt-4 mb-2 text-white bg-${item?.buttonColor} w-fit px-4 py-1 rounded-full`}>16 June, 2022</h1>
                                    <h1 className='text-secondary w-fit font-medium hover:underline cursor-pointer'>{item.title}</h1>
                                    <small className='text-[#646464]'>Student Name / 5 minute ago</small>
                                    <hr />
                                </div>
                            )
                        })
                    }


                </div>
            </div>

            {/* Course Summery */}
            <div className="business-summery mt-10 pb-10 grid px-4 md:px-5 sm:px-0 grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto">
                <div className="card bg-white md:px-5 px-2 lg:w-62 md:w-30 image-full mx-auto">
                    <figure></figure>
                    <div className="card-body justify-end">
                        <div className=''>
                            <div className='text-center text-5xl font-bold text-base-100'>A+</div>
                            <p className='text-center md:text-2xl text-xl font-medium text-base-100'>Course Rating</p>
                        </div>
                    </div>
                </div>
                {
                    counterCardDara.map((item, index) => {
                        return <CourseSummery
                            key={index}
                            icon={item.icon}
                            end={item.end}
                            title={item.title}
                        />
                    })
                }
            </div>

            {/* Notice board */}
            <div className="flex">
                <div className="notice shadow-lg bg-white w-[65%] px-4 md:px-5 py-8">
                    <h1 className='title_text'>Notice Board</h1>
                    {
                        noticeBoardData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={`bg-${item.buttonColor} rounded-full my-2 pl-3 py-2 flex items-center w-full`}>
                                        <div className='text-3xl text-white'>{item.icon}</div>
                                        <h1 className='ml-2'>{item.buttonData}</h1>
                                    </div>

                                    <h1 className='text-[#324D90] mb-2 hover:underline cursor-pointer w-fit'>
                                        {item.details.includes("&") ?
                                            item.details.split("&").map((item, index) => {
                                                return <span key={index}>{item}<br /></span>
                                            }) : item.details}
                                    </h1>
                                    <small className='text-[#646464]'>{item.timing}</small>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="schedule shadow-lg px-4 md:px-5 bg-white ml-auto w-[30%] py-8">
                    <h1 className='title_text'>Course Schedule</h1>
                </div>
            </div>
        </div >
    );
};

export default Physics;