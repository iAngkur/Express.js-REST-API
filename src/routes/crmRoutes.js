import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
} from '../controllers/crmController.js';

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);

    app.route('/contact/:contactId')
        .get(getContactWithId)
        .put(updateContact)
        .delete(deleteContact);
}

export default routes;