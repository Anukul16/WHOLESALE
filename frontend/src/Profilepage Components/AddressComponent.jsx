import React, { useState } from 'react';

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
    width: "30%",
    height: '50px',
    backgroundColor: '#2874F0',
    color: 'whitesmoke',
    border: 'none',
    fontWeight: '500'
}

const AddressComponent = ({ onCancel }) => {

    const [addresses, setAddresses] = useState([])
    const [newAddress, setNewAddress] = useState({
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
    })

    const handleSave = () => {
        console.log("clicked");
        console.log(newAddress);
        if (validateAddress(newAddress)) {
            setAddresses((prevAddress) => [...prevAddress, newAddress])
            setNewAddress({
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
            })
        }
    }

    const validateAddress = (address) => {
        return address.name && address.mobileNumber && address.city && address.state;
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

    // for selecting state dynamically
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
            <div className="address mt-4 border" style={address}>
                <div className="add-second-row p-2 ">
                    <h6 className='ms-3 mt-1' style={{ color: '#2874F0' }}>ADD A NEW ADDRESS</h6>
                </div>
                <div className="add-second-row mt-4 w-100" style={inputdiv}>
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        style={inputstyle}
                        required
                        className='ms-3'
                        value={newAddress.name}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, name: e.target.value }))}
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder='10 digit mobile number'
                        style={inputstyle}
                        required
                        className='ms-3'
                        value={newAddress.mobileNumber}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, mobileNumber: e.target.value }))}
                    />
                </div>
                <div className="add-third-row mt-4 w-100" style={inputdiv}>
                    <input
                        type="text"
                        name="pincode"
                        placeholder='Pincode'
                        style={inputstyle}
                        required
                        className='ms-3'
                        value={newAddress.pincode}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, pincode: e.target.value }))}
                    />
                    <input
                        type="text"
                        name="locality"
                        placeholder='Locality'
                        style={inputstyle}
                        required
                        className='ms-3'
                        value={newAddress.locality}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, locality: e.target.value }))}
                    />
                </div>
                <div className="add-fourth-row mt-4 w-100" >
                    <input
                        type="text"
                        name="street"
                        placeholder='Address(Area & Street)'
                        required
                        className='ms-3'
                        style={{ height: "110px", width: "72%" }}
                        value={newAddress.street}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, street: e.target.value }))}
                    />
                </div>
                <div className="add-fifth-row mt-4 w-100" style={inputdiv}>
                    <input
                        type="text"
                        name="city"
                        placeholder='City/District/Town'
                        style={inputstyle}
                        required
                        className='ms-3'
                        value={newAddress.city}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, city: e.target.value }))}
                    />
                    <select
                        value={selectedState}
                        onChange={handleStateChange}
                        style={inputstyle}
                        className='ms-3'
                    >
                        {states.map((state) => (
                            <option
                                key={state.value}
                                value={state.value}
                                disabled={state.value === 'DEFAULT'}
                            >
                                {state.text}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="add-sixth-row mt-4 w-100" style={inputdiv}>
                    <input
                        type="text"
                        name="landmark"
                        placeholder='Landmark(Optional)'
                        style={inputstyle}
                        className='ms-3'
                        value={newAddress.landmark}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, landmark: e.target.value }))}
                    />
                    <input
                        type="text"
                        name="alternatePhone"
                        placeholder='Alternate Phone(Optional)'
                        style={inputstyle}
                        className='ms-3'
                        value={newAddress.alternatePhone}
                        onChange={(e) => setNewAddress((prevAddress) => ({ ...prevAddress, alternatePhone: e.target.value }))}
                    />
                </div>
                <div className="add-seventh-row mt-4" >
                    <h6 className='ms-4'>Address Type</h6>
                    <label className='mt-2 '>
                        <input
                            type="radio"
                            name="addressType"
                            value="Home"
                            required
                            style={radiostyle.input}
                            className='ms-4'
                            checked={newAddress.addressType === 'Home'}
                            onChange={() => setNewAddress((prevAddress) => ({ ...prevAddress, addressType: 'Home' }))}
                        />
                        Home
                    </label>

                    <label >
                        <input
                            type="radio"
                            name="addressType"
                            value="Work"
                            required
                            style={radiostyle.input}
                            className='ms-4'
                            checked={newAddress.addressType === 'Work'}
                            onChange={() => setNewAddress((prevAddress) => ({ ...prevAddress, addressType: 'Work' }))}
                        />
                        Work
                    </label>
                </div>

                <div className="add-eight-row mt-5 mb-3 d-flex align-items-center" >
                    <button className='ms-3' style={savebuttonstyle} onClick={handleSave}>SAVE</button>
                    <h6 className='ms-5' style={{ color: '#2874F0', cursor: 'pointer' }} onClick={onCancel}>CANCEL</h6>
                </div>
            </div>
        </>
    )
}

export default AddressComponent;
