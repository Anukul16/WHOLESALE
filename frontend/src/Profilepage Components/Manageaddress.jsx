import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../Stylesheet/Manageaddress.css'
import AddressComponent from './AddressComponent';
const Manageaddress = () => {

  const [address, setAddress] = useState(false)

  return (
    <>
      <div className="manage-address">
        <div className="ma-first-row">
          <h5>Manage Address</h5>
        </div>
        {
          address ? <AddressComponent /> :
            <div className="ma-second-row mt-5 d-flex p-2 align-items-center border" onClick={() => setAddress(true)}>

              <AddIcon className='ms-2' />
              <h6 className='ms-3 mt-1'>ADD A NEW ADDRESS</h6>
            </div>
        }


      </div>

    </>
  )
}

export default Manageaddress