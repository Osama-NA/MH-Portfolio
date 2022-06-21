import React from 'react'

const SuccessMessage = ({ setShowSuccessMessage }) => {
    return (
        <div className="success-message" onClick={() => setShowSuccessMessage(false)}>
            <i className="fa-solid fa-xmark"></i>
            <p>Message sent successfully</p>
        </div>
  )
}

export default SuccessMessage