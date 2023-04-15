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
    let jobTitles = [
        'Creative Director',
        'Art Director',
        'Live Action Director',
        'Digital Director',
        'VFX Director',
        'Brand Strategist',
        'Copywriter',
        'Photographer',
        'Cinematographer',
        'Sound Engineer',
        'Video Editor',
        'Motion Graphic Designer',
        'Graphic Designer',
        'UI/UX Designer',
        'Illustrator',
        'Animator',
        'Retoucher',
        'Full-stack developer',
        'Shopify & Plus Developer',
        'Webflow Developer',
        'Special Effects and Make up Artist',
        'Set Designer'
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