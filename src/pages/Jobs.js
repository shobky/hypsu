import React, { useState } from 'react'
import './jobs.css'
import img from '../assets/hero.webp'
import { useNavigate } from 'react-router'
import bg from '../assets/bg.gif'
const Jobs = ({ jobTitles, handleClickedTitle }) => {
  const [searchQ, setSearchQ] = useState('')

  const navigate = useNavigate()

  const handleClickBtn = (job) => {
    navigate(`/${job}`)
    handleClickedTitle(job)
  }
  return (
    <>
   
      <div className='jobs'>
        <h1 className='jobs-header'>Hypso</h1>
        <h2 className='jobs-sub-header'>Come work wiht us</h2>
        <h3 className='jobs-second-sub-header'>Let's build a more productive future for the advertising industry. </h3>
        <img className='jobs-img' alt='' src={img} />
        <section className='section-2'>
          <div className='jobs-flex'>
            <div className='jobs-flex-cell'>
              <h2>Higher Pay</h2>
              <p>You get to decide your hourly rate and bonus incentives without the need for negotiations and be able to raise/change them as you see fit.</p>
            </div>
            <div className='jobs-flex-cell'>
              <h2>Zero Burnout</h2>
              <p>In order to reduce burnout and creative fatigue there are no mandatory projects or work timings only task deadlines by date. </p>
            </div>
            <div className='jobs-flex-cell'>
              <h2>No Office</h2>
              <p>The connected world has no boundaries, choose and work from where you are most productive and the times you are most productive. </p>
            </div>
          </div>
          <div className='section-2-header'>
            <h2>Job openings</h2>
            <input onChange={(e) => setSearchQ(e.target.value)} className='jobs-search-input' placeholder='search...' />
          </div>
          <ul className='jobs-titels-container'>
            {
              jobTitles.filter((f) => {
                if (searchQ === '') {
                  return f
                } else if (f.toLowerCase().includes(searchQ.toLocaleLowerCase())) {
                  return f
                } else {
                }
              }).map((job) => (
                <li>
                  <p className='apply-job-desc'>descreption for</p>
                  <p className='apply-job-title'>{job}</p>
                  <button onClick={() => handleClickBtn(job)} className='apply-btn'>Apply now</button>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </>

  )
}

export default Jobs