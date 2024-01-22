import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../Stylesheet/Manageaddress.css';
import AddressComponent from './AddressComponent';
import DataComponent from './DataComponent';
import { AddressState } from '../ContextReducer/AddressContext';

const Manageaddress = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { addressState: { address }, addressDispatch } = AddressState();

  React.useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    addressDispatch({
      type: 'SHOW_ADDRESS',
      payload: storedAddresses,
    });
  }, [addressDispatch]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="manage-address">
        <div className="ma-first-row">
          <h5>Manage Address</h5>
        </div>
        {isEditing ? (
          <AddressComponent onCancel={handleCancelEdit} />
        ) : (
          <div
            className="ma-second-row mt-5 d-flex p-2 align-items-center border"
            onClick={handleEdit}
          >
            <AddIcon className="ms-2" />
            <h6 className="ms-3 mt-1">ADD A NEW ADDRESS</h6>
          </div>
        )}
        <DataComponent onEdit={handleEdit} />
      </div>
    </>
  );
};

export default Manageaddress;
