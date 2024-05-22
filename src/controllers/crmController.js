import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body);

    try {
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        res.send(err);
    }
}

export const getContactWithId = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
}

export const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
        res.json(updatedContact);
    } catch (err) {
        res.send(err);
    }
}

export const deleteContact = async (req, res) => {
    try {
        await Contact.findOneAndDelete({ _id: req.params.contactId });
        res.json({ message: 'Successfully deleted contact' });
    } catch (err) {
        res.send(err);
    }
}

