// AddressComponent.js

import React, { useState } from 'react';
import { AddressState } from '../ContextReducer/AddressContext';
import '../Stylesheet/Addresscomponent.css'; // Import the CSS file
import { v4 as uuidv4 } from 'uuid';

const AddressComponent = ({ onCancel }) => {
    const { addressState: { address }, addressDispatch } = AddressState();

    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({
        id: '',
        name: '',
        mobileNumber: '',
        pincode: '',
        locality: '',
        street: '',
        city: '',
        state: '',
        landmark: '',
        alternatePhone: '',
        addressType: '',
    });

    
    const handleSave = () => {
        const updatedAddress = {
            ...newAddress,
            id: uuidv4()
        };
    
        // Get existing addresses from localStorage
        const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    
        // Update the array with the new address
        const updatedAddresses = [...storedAddresses, updatedAddress];
    
        // Save the updated array back to localStorage
        localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    
        // Dispatch the updated addresses to the context
        addressDispatch({
            type: 'SHOW_ADDRESS',
            payload: updatedAddresses,
        });
    
        setAddresses(updatedAddresses);
    
        setNewAddress({
            id: '',
            name: '',
            mobileNumber: '',
            pincode: '',
            locality: '',
            street: '',
            city: '',
            state: '',
            landmark: '',
            alternatePhone: '',
            addressType: '',
        });
    };
    
    const states = [
        { value: 'DEFAULT', text: 'Select a State' },
        { value: 'andhra_pradesh', text: 'Andhra Pradesh' },
        { value: 'arunachal_pradesh', text: 'Arunachal Pradesh' },
        { value: 'assam', text: 'Assam' },
        { value: 'bihar', text: 'Bihar' },
        { value: 'chhattisgarh', text: 'Chhattisgarh' },
        { value: 'goa', text: 'Goa' },
        { value: 'gujarat', text: 'Gujarat' },
        { value: 'haryana', text: 'Haryana' },
        { value: 'himachal_pradesh', text: 'Himachal Pradesh' },
        { value: 'jammu_kashmir', text: 'Jammu and Kashmir' },
        { value: 'jharkhand', text: 'Jharkhand' },
        { value: 'karnataka', text: 'Karnataka' },
        { value: 'kerala', text: 'Kerala' },
        { value: 'madhya_pradesh', text: 'Madhya Pradesh' },
        { value: 'maharashtra', text: 'Maharashtra' },
        { value: 'manipur', text: 'Manipur' },
        { value: 'meghalaya', text: 'Meghalaya' },
        { value: 'mizoram', text: 'Mizoram' },
        { value: 'nagaland', text: 'Nagaland' },
        { value: 'odisha', text: 'Odisha' },
        { value: 'punjab', text: 'Punjab' },
        { value: 'rajasthan', text: 'Rajasthan' },
        { value: 'sikkim', text: 'Sikkim' },
        { value: 'tamil_nadu', text: 'Tamil Nadu' },
        { value: 'telangana', text: 'Telangana' },
        { value: 'tripura', text: 'Tripura' },
        { value: 'uttar_pradesh', text: 'Uttar Pradesh' },
        { value: 'uttarakhand', text: 'Uttarakhand' },
        { value: 'west_bengal', text: 'West Bengal' },
    ];

    const [selectedState, setSelectedState] = useState(states[0].value);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setNewAddress((prevAddress) => ({
            ...prevAddress,
            state: event.target.value,
        }));
    };

    
    return (
        <>
            <div className="address mt-4 border">
                <div className="add-second-row p-2">
                    <h6 className="ms-3 mt-1" style={{ color: '#2874F0' }}>
                        ADD A NEW ADDRESS
                    </h6>
                </div>
                <div className="add-second-row mt-4 w-100 inputdiv">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="inputstyle ms-3"
                        required
                        value={newAddress.name}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, name: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="10 digit mobile number"
                        className="inputstyle ms-3"
                        required
                        value={newAddress.mobileNumber}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, mobileNumber: e.target.value }))
                        }
                    />
                </div>
                <div className="add-third-row mt-4 w-100 inputdiv">
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        className="inputstyle ms-3"
                        required
                        value={newAddress.pincode}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, pincode: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        name="locality"
                        placeholder="Locality"
                        className="inputstyle ms-3"
                        required
                        value={newAddress.locality}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, locality: e.target.value }))
                        }
                    />
                </div>
                <div className="add-fourth-row mt-4 w-100">
                    <input
                        type="text"
                        name="street"
                        placeholder="Address(Area & Street)"
                        required
                        className="ms-3 inputstyle"
                        style={{ height: '110px', width: '72%' }}
                        value={newAddress.street}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, street: e.target.value }))
                        }
                    />
                </div>
                <div className="add-fifth-row mt-4 w-100 inputdiv">
                    <input
                        type="text"
                        name="city"
                        placeholder="City/District/Town"
                        className="inputstyle ms-3"
                        required
                        value={newAddress.city}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, city: e.target.value }))
                        }
                    />
                    <select
                        value={selectedState}
                        onChange={handleStateChange}
                        className="inputstyle ms-3"
                    >
                        {states.map((state, id) => (
                            <option
                                key={state.text}
                                value={state.value}
                                disabled={state.value === 'DEFAULT'}
                            >
                                {state.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="add-sixth-row mt-4 w-100 inputdiv">
                    <input
                        type="text"
                        name="landmark"
                        placeholder="Landmark(Optional)"
                        className="inputstyle ms-3"
                        value={newAddress.landmark}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({ ...prevAddress, landmark: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        name="alternatePhone"
                        placeholder="Alternate Phone(Optional)"
                        className="inputstyle ms-3"
                        value={newAddress.alternatePhone}
                        onChange={(e) =>
                            setNewAddress((prevAddress) => ({
                                ...prevAddress,
                                alternatePhone: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="add-seventh-row mt-4">
                    <h6 className="ms-4">Address Type</h6>
                    <label className="mt-2">
                        <input
                            type="radio"
                            name="addressType"
                            value="Home"
                            required
                            className="ms-4 radiostyle"
                            checked={newAddress.addressType === 'Home'}
                            onChange={() =>
                                setNewAddress((prevAddress) => ({ ...prevAddress, addressType: 'Home' }))
                            }
                        />
                        Home
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="addressType"
                            value="Work"
                            required
                            className="ms-4 radiostyle"
                            checked={newAddress.addressType === 'Work'}
                            onChange={() =>
                                setNewAddress((prevAddress) => ({ ...prevAddress, addressType: 'Work' }))
                            }
                        />
                        Work
                    </label>
                </div>
                <div className="add-eight-row mt-5 mb-3 d-flex align-items-center">
                    <button className="ms-3 savebuttonstyle" onClick={handleSave}>
                        SAVE
                    </button>
                    <h6
                        className="ms-5"
                        style={{ color: '#2874F0', cursor: 'pointer' }}
                        onClick={onCancel}
                    >
                        CANCEL
                    </h6>
                </div>
            </div>
        </>
    );
};

export default AddressComponent;
