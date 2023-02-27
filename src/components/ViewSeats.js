import React from 'react'

const ViewSeats = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='card shadow bg-light border-dark seatsCard'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='col-lg-6 col-md-6'>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            <input type='checkbox' className='form-check-input' value='1'/>
                            
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