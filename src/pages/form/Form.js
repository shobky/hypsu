import React, { useEffect, useState } from 'react';
import './Form.css';
import { useLocation } from 'react-router';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/Config';
import { ref, uploadBytes } from 'firebase/storage';
import { ImSpinner8 } from 'react-icons/im'

const Form = ({ pathname }) => {
    const [formattedPathname, setFormattedPathname] = useState(true);

    const [submited, setSubmited] = useState(false)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [referralNumber, setReferralNumber] = useState('');



    const handleSubmit = async (e) => {

        e.preventDefault();
        setSubmited('loading')

        const REsumeStorageRef = ref(storage, `${email}-${resume.name}`);
        await uploadBytes(REsumeStorageRef, resume)

        if (coverLetter) {
            const CoverStorageRef = ref(storage, `${email}-${coverLetter.name}`);
            await uploadBytes(CoverStorageRef, coverLetter)
        }


        await setDoc(doc(db, formattedPathname, email), {
            firstName,
            lastName,
            email,
            phone,
            website,
            resume: `${email}-${resume.name}`,
            coverLetter: coverLetter ? `${email}-${coverLetter.name}` : null,
            referralNumber
        });

        setSubmited(true)
        setTimeout(() => {
            setSubmited(false)
        }, 1200);
    };

    function formatPathname(pathname) {
        const updatedPathname = pathname.replace(/%20/g, ' ');
        if (updatedPathname.charAt(0) === '/') {
            return updatedPathname.substring(1);
        }
        return updatedPathname;
    }

    useEffect(() => {
        const updatedPathname = formatPathname(pathname);
        setFormattedPathname(updatedPathname);
    }, [pathname]);

    return (
        <div className="form-container">
            <div className='form-inner'>
                <h1 className="form-header">Apply for {formattedPathname}</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-double-group'>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                name='firstName'
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-double-group'>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                name='phone'
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-double-group'>
                        <div className="form-group">
                            <label htmlFor="coverLetter">Cover Letter:</label>
                            <input
                                type="file"
                                id="coverLetter"
                                accept=".pdf,.doc,.docx,.rtf"
                                onChange={(e) => setCoverLetter(e.target.files[0])}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="resume">Resume/CV/Portfolio:</label>
                            <input
                                type="file"
                                id="resume"
                                accept=".pdf,.doc,.docx,.rtf"
                                onChange={(e) => setResume(e.target.files[0])}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-double-group'>
                        <div className="form-group">
                            <label htmlFor="website">Website:</label>
                            <input
                                type="url"
                                id="website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="referralNumber">Referral Number:</label>
                            <input
                                type="text"
                                id="referralNumber"
                                value={referralNumber}
                                onChange={(e) => setReferralNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className={submited === true ? 'submit-btn__done' : 'submit-btn'} type="submit">{submited === 'loading' ? <ImSpinner8 className="form-spinner" /> : submited  ? 'Done' : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
