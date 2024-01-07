import React from 'react'
import MainContainer from './MainContainer'
import { responsive, earRingsData } from '../Datas/EarRings';
import { payalData } from '../Datas/Payal';
const Parent = () => {
    const earRings = earRingsData.length >0 ? earRingsData[0].title : ''
    const payal = payalData.length >0 ? payalData[0].title : ''
  return (
    <>
        <MainContainer title={earRings} data={earRingsData} responsive={responsive} />
        <MainContainer title={payal} data={payalData} responsive={responsive} /> 
    </>
  )
}

export default Parent