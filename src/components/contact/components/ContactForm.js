import React, { useState } from 'react'

const REQUEST_URL = `${process.env.REACT_APP_SERVER_URL}/portfolio/send-email`;
const SERVER_SECRET = process.env.REACT_APP_SERVER_JWT_TOKEN;

const defaultState = {
    email: '',
    name: '',
    message: ''
}

const ContactForm = ({ setShowSuccessMessage }) => {
    const [formControl, setFormControl] = useState(defaultState)

    const handleFormSubmit = e => {
        e.preventDefault();

        const {email, name, message} = formControl

        if(email === '' || name === '' || message === '') {
            alert('Please Fill in all the required fields')
            return;
        }

        sendEmail()
    }

    const sendEmail = async () => {
        const { email, name, message } = formControl
        const response = await fetch(REQUEST_URL, {
            headers: { 
                'x-access-token': SERVER_SECRET,
                'Content-Type': 'application/json'
             },
            body: JSON.stringify({ email, name, message }),
            method: 'POST',
         });

        const data = await response.json();
        console.log(data);
        if (data.status === 'ok'){
            setTimeout(() => setShowSuccessMessage(true), 1000)
            resetForm()
        }
        else if(data.status === 'error'){
            alert("Failed to send email: " + data.error)
        }
    }

    const resetForm = e => {
        e && e.preventDefault();
        setFormControl(defaultState)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="johnsmith@gmail.com" 
                        style={{fontWeight: '200'}} 
                        value={formControl.email}
                        onChange={(e) => setFormControl({ ...formControl, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text" 
                        placeholder="John Smith" 
                        style={{fontWeight: '200'}} 
                        value={formControl.name}
                        onChange={(e) => setFormControl({ ...formControl, name: e.target.value })}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        placeholder="Enter your message" 
                        style={{fontWeight: '200'}} 
                        value={formControl.message}
                        onChange={(e) => setFormControl({ ...formControl, message: e.target.value })}
                        required 
                    />
                </div>
                <div className="buttons-group">
                    <button onClick={resetForm} className="reset">Reset</button>
                    <button type="submit" className="submit">Submit</button>
                </div>
            </form>
        </div>
  )
}

export default ContactForm