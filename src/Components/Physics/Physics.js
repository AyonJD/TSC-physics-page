import React, { useState } from 'react';
import CourseImage from '../../assets/Ellipse-18.svg'
import InsImage from '../../assets/Ellipse-19.svg'
import CourseSummery from './CourseSummery';
import { noticeBoardData, counterCardDara, classSchedule, chapterData } from './Constant';
import Clock from '../Clock/Clock';
import { useNavigate } from 'react-router-dom';
import CourseNotification from './CourseNotification';
import './ChapterPage.css'

const Physics = () => {
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    const navigate = useNavigate();
    const [numberOfChapterData, setNumberOfChapterData] = useState(4)
    const slicedChapterData = chapterData.slice(0, numberOfChapterData);
    const handleChapterData = () => {
        setNumberOfChapterData(numberOfChapterData + 2);
    }

    console.log(slicedChapterData.length === chapterData.length);

    return (
        <div className='main_background'>
            <div className='mid_container mx-auto'>

                <nav className="flex default_text_color pt-8 pb-4" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center chapter_breadcrumb">
                        <li className="inline-flex items-center">
                            <a href="/" className="inline-flex items-center text-sm font-medium gray_text" alt=''>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </a>
                        </li>

                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 gray_text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="ml-1 gray_text cursor-pointer text-sm font-medium ">Course</span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 gray_text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="ml-1 text-sm font-medium gray_text cursor-pointer">Physics</span>
                            </div>
                        </li>
                    </ol>
                </nav>


                <div className="course_banner grid grid-cols-1 gap-10">
                    <div className="subject  shadow-lg px-4 md:px-5 py-8 pb-28">
                        <h1 className='text-5xl default_text_color font-semibold mb-6'>Physics</h1>
                        <div className="flex">
                            <div className="content">
                                <h1 className='title_text'>Class 9-10</h1>
                                <h1 className='title_text'>CC - LoRIV</h1>
                                <h1 className='title_text'>Rating 4.5/5</h1>
                                <h1 className='title_text mt-16'>@Teacher Institute Email</h1>
                            </div>
                            <div className="images relative flex-col flex justify-center items-center">
                                <div>
                                    <img className='image_one w-full mx-auto' src={CourseImage} alt="" />
                                    <img className='image_two absolute bottom-0' src={InsImage} alt="" />
                                </div>
                                <button className='absolute start_class_button'>Start Class</button>
                            </div>
                        </div>
                    </div>
                    <CourseNotification />
                </div>

                {/* Course Summery */}
                <div className="business-summery mt-10 pb-10 grid px-4 grid-cols-2 gap-10 mid_container mx-auto">
                    <div className="card course_summery_card single_card px-2 image-full mx-auto rounded-sm">
                        <div className="card-body justify-end">
                            <div className=''>
                                <div className='text-center initial_counter text-5xl font-bold'>A+</div>
                                <p className='text-center text-xl font-medium initial_counter_detail'>Course Rating</p>
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
                <div className="notiece_board">
                    <div className="schedule order-2 mb-8 shadow-lg ml-auto w-full">
                        <h1 className='title_text pt-8 pb-3 text-center'>Course Schedule</h1>
                        <div className='clock_parent py-4'>
                            <Clock />
                        </div>

                        {/* Class Schedule */}


                        <div className="overflow-x-auto relative class_schedule shadow-lg mt-4">

                            <table className="w-full text-sm text-left ">
                                <thead className="text-sm uppercase ">
                                    <tr>

                                        <th scope="col" className="py-3 px-6">
                                            DAY
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            TIME
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        classSchedule.map((time, index) => {
                                            return (
                                                <tr key={index} className="class_schedule_table_row hover_table_row">


                                                    <td className={`font-medium py-4 px-6 ${currentDay === time.day && "active_table_row"}`}>
                                                        {time.day}
                                                    </td>
                                                    <td className={`font-medium py-4 px-6 ${currentDay === time.day && "active_table_row"}`}>
                                                        {time.time}
                                                    </td>

                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>


                    </div>

                    <div className="notice shadow-lg overflow-y-auto w-full px-4 py-8">
                        <h1 className='title_text'>Notice Board</h1>
                        {
                            noticeBoardData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={`notice_title rounded-full my-2 pl-3 py-2 flex items-center w-full`}>
                                            <div className='text-3xl notice_icon'>{item.icon}</div>
                                            <h1 className='ml-2'>{item.buttonData}</h1>
                                        </div>

                                        <h1 className='notice_desc mb-2 cursor-pointer w-fit'>
                                            {item.details.includes("&") ?
                                                item.details.split("&").map((item, index) => {
                                                    return <span key={index}>{item}<br /></span>
                                                }) : item.details}
                                        </h1>
                                        <small className='notice_timer'>{item.timing}</small>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                {/* Chapters */}
                <div className='mt-10 chapter_section'>
                    <div className="overflow-x-auto chapter_table_parent relative shadow-lg">

                        <table className="w-full text-xs text-left">
                            <thead className="text-sm">
                                <tr>

                                    <th scope="col" className="py-3 px-6">
                                        #
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Chapter Icon
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Chapter Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Chapter Serial
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Chapter Options
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    slicedChapterData.map((singleChapter, index) => {
                                        return (
                                            <>
                                                <tr key={index} className="chapter_table_row hover_table_row ">


                                                    <td className={`font-medium py-2 px-6`}>
                                                        {index + 1}
                                                    </td>
                                                    <td className={`py-2 px-6`}>
                                                        <img className='w-12 rounded-full p-1 image-shadow' src={singleChapter.chapterImage} alt="" />
                                                    </td>
                                                    <td className={`font-medium py-2 px-6`}>
                                                        {singleChapter.chapterName}
                                                    </td>
                                                    <td className={`font-medium py-2 px-6`}>
                                                        {singleChapter.chapterSerial}
                                                    </td>
                                                    <td className={`font-medium `}>
                                                        <button className='open_course_button btn-sm button-shadow text-xs' onClick={() => navigate(`${singleChapter.chapterSerial}`)}>Open Course</button>
                                                    </td>
                                                </tr>
                                            </>

                                        )
                                    })
                                }


                            </tbody>

                        </table>
                    </div>
                    <div className="text-end w-full">
                        <button onClick={handleChapterData} className={`py-2 rounded font-medium px-10 start_class_button my-5 ${slicedChapterData.length === chapterData.length && "hidden"}`}>Show More</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Physics;