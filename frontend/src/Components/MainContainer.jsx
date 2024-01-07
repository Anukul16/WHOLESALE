import React from 'react'
import Card from './Card'
import '../Stylesheet/MainContainer.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const MainContainer = ({title,data,responsive}) => {


    return (
        <>

            <div className="container-fluid main">
                <div className="row first mb-2 mt-2">
                    <div className="col">
                        <h4>{title}</h4>
                    </div>
                </div>
                <div className="row second mb-3">
                    <Carousel responsive={responsive}>
                        {
                            data.map((item, id) => (
                                <Card key={id} value={item} />
                            ))
                        }
                    </Carousel>
                </div>

            </div>
        </>
    )
}

export default MainContainer