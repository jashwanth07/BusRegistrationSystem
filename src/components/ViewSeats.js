import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const ViewSeats = () => {

    const [seatCol1, setSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
   
    
    // const arr = [1,2,3,4,5,6,7,8,9,10];
    // const sub = (e)=>{
    //     e.preventDefault();
    //     // 
    //     setSeats(seats);

    // }
    // 


    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='card shadow bg-light border-dark seatsCard'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='col-lg-6 col-md-6 mt-4'>
                            <div className='col-lg-3 col-md-3'>
                                {
                                    seatCol1.map((e, i) =>
                                        <input type='checkbox' className='form-check-input p-2' key={i} value={e}></input>
                                    )

                                }
                            </div>
                            {



                            }

                        </div>
                        <div className='col-lg-6 col-md-6'>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewSeats