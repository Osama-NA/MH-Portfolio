import React from 'react'
import { useEffect, useState } from 'react'

const Socials = ({ contacts }) => {
    const [links, setLinks] = useState({})

    useEffect(() => {
        let socials = {}

        contacts.map(contact => {
            return socials = Object.assign(socials, {
                [contact.type]: contact.isURL ? contact.URL : contact.contact
            })
        })

        setLinks(socials)
    }, [contacts])

    return (
        <div className="socials-links-container">
            <div className="link">
                <a href={links["LinkedIn"]} className="socials" rel="noopener noreferrer" target="_blank" >
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
            <div className="link">
                <a href={"https://wa.me/" + links["phone number"]} className="socials" rel="noopener noreferrer" target="_blank" >
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
            <div className="link">
                <a href={links["Instagram"]} className="socials" rel="noopener noreferrer" target="_blank" >
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
            <div className="link">
                <a href={"mailto:" + links["email"]} className="socials" rel="noopener noreferrer" target="_blank" >
                    <i className="fa-regular fa-envelope"></i>
                </a>
            </div>
        </div>
  )
}

export default Socials