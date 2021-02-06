'use strict';
import {
    clearScreen,
    renderEditView,
    renderContactView,
    renderDefaultView
} from './render.js'

import {contacts} from './main.js';

import {
    createNewContact, 
    saveContact,
    saveToStorage
} from './data.js';

function deleteContact(contact) {
    //Deletes a particular contact from global list and updates memory
    contacts.map((item, index) => {
        if (item.id == contact.id) {
            contacts.splice(index, 1);
        }
    })
    saveToStorage(contacts);
    clearScreen();
    renderDefaultView(contacts);
}

function plus() {
    //calls createNewContact, clears screen, and renders it in edit view
    const newContact = createNewContact();
    clearScreen();
    renderEditView(newContact);
}

function back() {
    //clears screen and renders default view
    clearScreen();
    renderDefaultView(contacts);
}

function viewDetails(e) {
    //clears screen and renders view for clicked contact
    const id = e.target.id;
    let index;
    contacts.map((contact, i) => {
        if (contact.id == id) {
            index = i;
        }
    })
    clearScreen();
    renderContactView(contacts[index]);

}

function edit(contact){
    //clear screen, render edit screen, and fill in data with current object
    clearScreen();
    renderEditView(contact);
    
}

function done(e, contact) {
    //saves new contact info to memory, clears screen and renders default screen.
    //Problem if this is being called for both edit and create new. this only works right for create new contact

    const newContact = {
            firstName: document.querySelector('#fname').value,
            lastName: document.querySelector('#lname').value,
            phone: document.querySelector('#tel').value,
            email: document.querySelector('#email').value,
            address: document.querySelector('#address').value,
            notes: document.querySelector('#notes').value,
            id: document.querySelector('.form').id,
            imgSrc: document.querySelector('#output').src
        }

        
    saveContact(newContact);
    clearScreen();
    renderDefaultView(contacts);

}

function cancel() {
    clearScreen();
    renderDefaultView(contacts);
}

export {deleteContact, plus, cancel, back, edit, done, viewDetails}