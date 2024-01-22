// DataComponent.js

import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AddressState } from '../ContextReducer/AddressContext';
import '../Stylesheet/Datacomponent.css'; // Import the CSS file
import AddressComponent from './AddressComponent';


const DataComponent = ({onEdit}) => {
  const { addressState: { address }, addressDispatch } = AddressState();
  const [showOptions, setShowOptions] = useState(false);
  // const [edit,setEdit] = useState(false)
  // console.log("DataComponent: ", address);

  

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleEdit = () => {
    setShowOptions(false);
    onEdit()
    
  };

  const deleteItem = (id) => {
    // alert('Deleting item...');
    const idToRemove = id;

    const storedAddress = JSON.parse(localStorage.getItem('addresses')) || []

    const updatedAddress = storedAddress.filter((curr)=>curr.id !== idToRemove)

    localStorage.setItem('addresses',JSON.stringify(updatedAddress))
    addressDispatch({
      type: 'DELETE_ADDRESS',
      payload: id,
    });
    setShowOptions(false);
  };

  return (
    <>
    {/* {edit && <AddressComponent onCancel={() => setEdit(false)} />} */}
      {address.map((addr, id) => (
        <div key={id} className="wrapper border mt-3 p-3">
          <div className="butt dot">
            <button className="button">{addr.addressType}</button>
            <div
              className="options"
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <MoreVertIcon style={{ cursor: 'pointer' }} />

              {showOptions && (
                <div className="options">
                  <button onClick={handleEdit} className="deleteButton">
                    Edit
                  </button>
                  <button onClick={() => deleteItem(addr.id)} className="deleteButton">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="details mt-3">
            <h6>{addr.name} &nbsp; &nbsp; &nbsp; {addr.mobileNumber}</h6>
            <p>{addr.landmark} , {addr.city} , {addr.state}  -  {addr.pincode} </p>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default DataComponent;
