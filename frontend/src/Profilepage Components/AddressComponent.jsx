import React,{useState} from 'react'


const inputdiv = {
    // border: '1px solid red',
    // width: '100%'
}
const address = {
    // border: '2px solid red',
    backgroundColor: '#F5FAFF'
};

const inputstyle = {
    height: '50px',
    width: '35%',
    outline: 'none',
    boxSizing: 'border-box',
}
const radiostyle = {
    input: {
      type: "radio",
      transform: "scale(1.3)",
      marginRight: "15px",
    }
  };
  const savebuttonstyle = {
    width:"30%",
    height:'50px',
    backgroundColor:'#2874F0',
    color:'whitesmoke',
    border:'none',
    fontWeight:'500'
  }

const AddressComponent = () => {

    const [cancelClicked,setCancelClick] = useState(false)

    return (
        <>
            <div className="address mt-4 border" style={address}>
                <div className="add-second-row p-2 ">
                    <h6 className='ms-3 mt-1' style={{color:'#2874F0'}}>ADD A NEW ADDRESS</h6>
                </div>
                <div className="add-second-row mt-4 w-100" style={inputdiv}>
                    <input type="text" name="" id="" placeholder='Name' style={inputstyle} required className='ms-3' />
                    <input type="text" name="" id="" placeholder='10 digit mobile number' style={inputstyle} required className='ms-3' />
                </div>
                <div className="add-third-row mt-4 w-100" style={inputdiv}>
                    <input type="text" name="" id="" placeholder='Pincode' style={inputstyle} required className='ms-3' />
                    <input type="text" name="" id="" placeholder='Locality' style={inputstyle} required className='ms-3' />
                </div>
                <div className="add-fourth-row mt-4 w-100" >
                    <input type="text" name="" id="" placeholder='Address(Area & Street)' required className='ms-3' style={{ height: "110px", width: "72%" }} />
                </div>
                <div className="add-fifth-row mt-4 w-100" style={inputdiv}>
                    <input type="text" name="" id="" placeholder='City/District/Town' style={inputstyle} required className='ms-3' />
                    <select id="state" name="state" style={inputstyle} className='ms-3'>
                        <option value="" disabled selected>Select a State</option>
                        <option value="andhra_pradesh">Andhra Pradesh</option>
                        <option value="arunachal_pradesh">Arunachal Pradesh</option>
                        <option value="assam">Assam</option>
                        <option value="bihar">Bihar</option>
                        <option value="chhattisgarh">Chhattisgarh</option>
                        <option value="goa">Goa</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="haryana">Haryana</option>
                        <option value="himachal_pradesh">Himachal Pradesh</option>
                        <option value="jammu_kashmir">Jammu and Kashmir</option>
                        <option value="jharkhand">Jharkhand</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="kerala">Kerala</option>
                        <option value="madhya_pradesh">Madhya Pradesh</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="manipur">Manipur</option>
                        <option value="meghalaya">Meghalaya</option>
                        <option value="mizoram">Mizoram</option>
                        <option value="nagaland">Nagaland</option>
                        <option value="odisha">Odisha</option>
                        <option value="punjab">Punjab</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="sikkim">Sikkim</option>
                        <option value="tamil_nadu">Tamil Nadu</option>
                        <option value="telangana">Telangana</option>
                        <option value="tripura">Tripura</option>
                        <option value="uttar_pradesh">Uttar Pradesh</option>
                        <option value="uttarakhand">Uttarakhand</option>
                        <option value="west_bengal">West Bengal</option>
                    </select>
                </div>

                <div className="add-sixth-row mt-4 w-100" style={inputdiv}>
                    <input type="text" name="" id="" placeholder='Landmark(Optional)' style={inputstyle}  className='ms-3' />
                    <input type="text" name="" id="" placeholder='Alternate Phone(Optional)' style={inputstyle}  className='ms-3' />
                </div>
                <div className="add-seventh-row mt-4" >
                    <h6 className='ms-4'>Address Type</h6>
                    <label className='mt-2 '>
                        <input type="radio" name="type" value="male" required  style={radiostyle.input} className='ms-4'/>
                        Home
                    </label>

                    <label >
                        <input type="radio" name="type" value="female" required style={radiostyle.input}  className='ms-4'/>
                        Work
                    </label>
                </div>

                <div className="add-eight-row mt-5 mb-3 d-flex align-items-center" >
                    <button className='ms-3' style={savebuttonstyle}>SAVE</button>
                    <h6 className='ms-5' style={{color:'#2874F0',cursor:'pointer'}} onClick={()=>setCancelClick(true)}>CANCEL</h6>
                </div>
            </div>
        </>
    )
}




export default AddressComponent