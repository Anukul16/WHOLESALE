import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const button = {
    border:'none',
    fontSize:'12px',
    fontWeight:'500',
    color:'gray',
    backgroundColor:'lightgray',
    borderRadius:'2px'
}


const DataComponent = () => {
  return (
    <>
        <div className="wrapper border mt-5 p-3">
            <div className="butt dot d-flex justify-content-between">
                <button style={button}>WORK</button>
                <MoreVertIcon style={{cursor:'pointer'}}/>
            </div>
            <div className="details mt-3">
                <h6>Anukul Maity &nbsp; &nbsp; &nbsp; 9749760947</h6> 
                <p>Camellia Mess Midnapore, vidyasagar university 2nd gate road, Medinipur, West Bengal - 721101 </p>
            </div>
        </div>
    </>
  )
}

export default DataComponent