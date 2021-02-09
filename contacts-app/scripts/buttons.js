'use strict';
import {
    clearScreen,
    renderEditView,
    renderContactView,
    renderDefaultView
} from './render.js'

import {
    contacts
} from './main.js';

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
    renderEditView(newContact, false);
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

function edit(contact) {
    //clear screen, render edit screen, and fill in data with current object
    clearScreen();
    renderEditView(contact, true);

}

function done(e, edit = false) {
    //saves new contact info to memory, clears screen and renders default screen.
    //arg: edit: true if we are on the edit screen, false if we are on the add new contact screen
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
    if (edit) {
        let editedIndex
        contacts.map((item, index) => {
            if (item.id == newContact.id) {
                editedIndex = index
            }
        })

        for (const [key, value] of Object.entries(contacts[editedIndex])) {
            contacts[editedIndex][key] = newContact[key];
        } 
        saveToStorage(contacts)


    } else {
        saveContact(newContact);
    }

    clearScreen();
    renderDefaultView(contacts);

}

function cancel() {
    clearScreen();
    renderDefaultView(contacts);
}

export {
    deleteContact,
    plus,
    cancel,
    back,
    edit,
    done,
    viewDetails
}