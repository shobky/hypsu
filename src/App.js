import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Jobs from './pages/Jobs'
import Form from './pages/form/Form'
import bg from './assets/bg.gif'

const App = () => {

    const [clickedTitle, setClicekTitle] = useState('')

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);


    const handleClickedTitle = (title) => {
        setClicekTitle(title)
    }
    const jobTitles = [
        "Creative Director",
        "Art Director",
        "Graphic Designer",
        "Web Designer",
        "UX/UI Designer",
        "Copywriter",
        "Content Creator",
        "Brand Strategist",
        "Marketing Coordinator",
        "Account Manager",
        "Project Manager",
        "Social Media Manager",
        "Motion Designer",
        "Video Editor",
        "Photographer",
        "Illustrator",
        "Animator",
        "Front-end Developer",
        "Back-end Developer",
        "SEO Specialist",
        "Digital Marketing Specialist",
        "Public Relations Specialist",
        "Production Coordinator",
        "Print Production Specialist",
        "Studio Manager",
        "Creative Technologist",
        "User Researcher",
        "Data Analyst",
        "Account Executive",
        "Media Planner",
        "Sound Designer",
        "3D Artist",
        "Virtual Reality (VR) Developer",
        "Augmented Reality (AR) Developer",
        "Broadcast Producer",
        "Media Buyer",
        "Event Planner",
        "Exhibit Designer",
        "Packaging Designer",
        "Exhibition Designer",
        "Creative Writer",
        "UI/UX Researcher",
        "Digital Art Director",
        "Interactive Designer",
        "Social Media Strategist",
        "SEO Analyst",
        "Email Marketing Specialist",
        "Data Scientist",
        "CRM Manager",
        "Creative Producer"
    ];


    return (
        <React.Fragment>
            <div className='background-container'>
                <img alt='' src={bg} className="background" />
                <img alt='' src={bg} className="background" />
                <img alt='' src={bg} className="background" />
                <img alt='' src={bg} className="background" />
                <img alt='' src={bg} className="background" />
                <img alt='' src={bg} className="background" />
            </div>
            <Routes>
                <Route
                    path='/'
                    element=
                    {
                        <Jobs
                            jobTitles={jobTitles}
                            handleClickedTitle={handleClickedTitle}
                        />
                    }
                />
                {
                    jobTitles.map((job) => (
                        <Route
                            path={`/${job}`}
                            element={
                                <Form
                                    pathname={pathname}
                                    job={job}
                                    clickedTitle={clickedTitle}
                                />
                            } />
                    ))
                }
            </Routes>
        </React.Fragment>
    )
}

export default App