import React, { useState } from 'react';
import CourseImage from '../../assets/Ellipse-18.svg'
import InsImage from '../../assets/Ellipse-19.svg'
import CourseSummery from './CourseSummery';
import { noticeBoardData, counterCardDara, classSchedule, chapterData } from './Constant';
import Clock from '../Clock/Clock';
import { useNavigate } from 'react-router-dom';
import CourseNotification from './CourseNotification';

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
        <div className='container mx-auto'>

            <nav className="flex text-[#042954] pt-8 pb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>

                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="ml-1 cursor-pointer text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Course</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 cursor-pointer">Physics</span>
                        </div>
                    </li>
                </ol>
            </nav>


            <div className="course_banner grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="subject bg-white shadow-lg px-4 md:px-5 py-8 pb-28">
                    <h1 className='text-5xl text-[#042954] font-semibold mb-6'>Physics</h1>
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
                            <button className='absolute btn-primary py-2 rounded font-medium px-10 right-16 -bottom-24'>Start Class</button>
                        </div>
                    </div>
                </div>
                <CourseNotification />
            </div>

            {/* Course Summery */}
            <div className="business-summery mt-10 pb-10 grid px-4 md:px-5 sm:px-0 grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto">
                <div className="card bg-white md:px-5 px-2 lg:w-62 md:w-30 image-full mx-auto rounded-sm">
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
            <div className="md:flex">
                <div className="schedule order-2 mb-8 md:mb-0 shadow-lg bg-white ml-auto md:w-[30%] w-full">
                    <h1 className='title_text pt-8 pb-3 text-center'>Course Schedule</h1>
                    <div className='bg-[#282828] py-4'>
                        <Clock />
                    </div>

                    {/* Class Schedule */}


                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-4">

                        <table className="w-full hover text-sm text-left dark:text-gray-400">
                            <thead className="text-sm text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
                                            <tr key={index} className="bg-white border-gray-400 border-b dark:bg-gray-800 dark:border-gray-700 text-black hover:bg-gray-200 dark:hover:bg-gray-600">


                                                <td className={`font-medium py-4 px-6 ${currentDay === time.day && "bg-[#F9D671]"}`}>
                                                    {time.day}
                                                </td>
                                                <td className={`font-medium py-4 px-6 ${currentDay === time.day && "bg-[#F9D671]"}`}>
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

                <div className="notice shadow-lg max-h-[627px] overflow-y-auto bg-white md:w-[65%] w-full px-4 md:px-5 py-8">
                    <h1 className='title_text'>Notice Board</h1>
                    {
                        noticeBoardData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={`bg-accent rounded-full my-2 pl-3 py-2 flex items-center w-full`}>
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

            </div>

            {/* Chapters */}
            <div className='mt-10'>
                <div className="overflow-x-auto bg-white relative shadow-md sm:rounded-lg md:mt-4">

                    <table className="w-full hover text-xs md:text-sm text-left dark:text-gray-400">
                        <thead className="text-sm text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
                                            <tr key={index} className="bg-[#F4F4FE] border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700 text-black hover:bg-gray-300 dark:hover:bg-gray-600">


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
                                                    <button className='btn sm:py-2 btn-secondary btn-sm btn-outline button-shadow text-xs' onClick={() => navigate(`${singleChapter.chapterSerial}`)}>Open Course</button>
                                                </td>
                                            </tr>
                                        </>

                                    )
                                })
                            }


                        </tbody>

                    </table>
                </div>
                <div className="text-end w-[100%]">
                    <button onClick={handleChapterData} className={`py-2 rounded font-medium px-10 btn-primary my-5 ${slicedChapterData.length === chapterData.length && "hidden"}`}>Show More</button>
                </div>
            </div>
        </div >
    );
};

export default Physics;