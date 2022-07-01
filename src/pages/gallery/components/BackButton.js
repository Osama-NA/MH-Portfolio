import React from 'react'

const BackButton = () => {
    return (
        <button onClick={() => window.location.href = "/?to=Galleries"}>
            {
                document.body.offsetWidth < 769 ?
                    <>
                        <i className="fa-solid fa-left-long"></i>
                        <p>Back</p>
                    </> :
                    <div className="background-gradient">
                        <i className="fa-solid fa-left-long"></i>
                        <p>Back</p>
                    </div>
            }
        </button>
    )
}

export default BackButton