import React, { useState } from 'react'

const ProfileInformation = () => {


    const [isEditClick, setEditClick] = useState(false)
    const [isEditClick2, setEditClick2] = useState(false)
    const [isEditClick3, setEditClick3] = useState(false)

    return (
        <>
            <div className="personal-information">

                <div className="first-row">
                    <h5>Personal Information</h5>
                    {
                        (!isEditClick) ? <h6 onClick={() => setEditClick(true)}>Edit</h6> : <h6 onClick={() => setEditClick(false)}>Cancel</h6>
                    }
                </div>
                <div className="second-row  mt-4 ">
                    <input type="text" name="Flipkart" id="firstname" placeholder='Flipkart' disabled={isEditClick ? false : true} style={{ cursor: isEditClick ? '' : 'not-allowed' }} />

                    <input type="text" name="Customer" id="lastname" placeholder='Customer' disabled={isEditClick ? false : true} style={{ cursor: isEditClick ? '' : 'not-allowed' }} />
                    {
                        isEditClick ? <button>Save</button> : ""
                    }
                </div>
                <div className="third-row mt-4">
                    <h6>Your Gender</h6>
                    <label className='me-5 mt-2'>
                        <input type="radio" name="gender" value="male" required disabled={isEditClick ? false : true} style={{ cursor: isEditClick ? 'pointer' : 'not-allowed' }} />
                        Male
                    </label>

                    <label>
                        <input type="radio" name="gender" value="female" required disabled={isEditClick ? false : true} style={{ cursor: isEditClick ? 'pointer' : 'not-allowed' }} />
                        Female
                    </label>
                </div>

                <div className="fourth-row mt-5">
                    <h5>Email Address</h5>
                    {
                        (!isEditClick2) ? <h6 onClick={() => setEditClick2(true)}>Edit</h6> : <h6 onClick={() => setEditClick2(false)}>Cancel</h6>
                    }
                    <div className="email-div mt-4">
                        <input type="email" name="" id="" disabled={isEditClick2 ? false : true} style={{ cursor: isEditClick2 ? '' : 'not-allowed' }} />
                        {
                            isEditClick2 ? <button>Save</button> : ""
                        }
                    </div>
                </div>

                <div className="fifth-row mt-5">
                    <h5>Mobile Number</h5>
                    {
                        (!isEditClick3) ? <h6 onClick={() => setEditClick3(true)}>Edit</h6> : <h6 onClick={() => setEditClick3(false)}>Cancel</h6>
                    }
                    <div className="number-div mt-4">
                        <input type="email" name="" id="" disabled={isEditClick3 ? false : true} style={{ cursor: isEditClick3 ? '' : 'not-allowed' }} />
                        {
                            isEditClick3 ? <button>Save</button> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInformation