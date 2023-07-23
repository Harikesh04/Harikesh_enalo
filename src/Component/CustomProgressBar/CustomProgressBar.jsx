import React from 'react'
import "./CustomProgressBar.css"

const CustomProgressBar = ({ value }) => {

    return (
        <>

            <div className='pagination-container'>

                {value > 0 &&
                    <div style={{
                        width: `${value}%`
                    }}>
                        {value}%

                    </div>
                }
            </div>
        </>



    )
}

export default CustomProgressBar