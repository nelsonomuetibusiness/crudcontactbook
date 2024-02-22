'use server'

import db from './db'
import Contact from '@/models/Contact'




import React from 'react'

export const getContacts = async() => {
    try {
        db.connect()
        const contacts = await Contact.find({})
        return contacts
    } catch (error) {
        throw new Error ("Failed to fetch all contacts" + error )
    }
}



export const getContact = async(id) => {
    try {
        db.connect()
        const contact = Contact.findById(id)
        return contact
    } catch (error) {
        throw new Error ("can't find contact" + error)
    }
}