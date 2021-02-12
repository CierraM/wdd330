'use strict';
import {
    deleteContact,
    plus,
    viewDetails,
    back,
    edit,
    done,
    cancel
} from './buttons.js';

import {
    createId,
    imageToString
} from './data.js'
//All render function should include an event listener for buttons on that view

function renderDefaultView(contacts) {
    //Takes the list of contacts and renders them to the screen
    const header = document.createElement('div')
    header.classList.add('header')

    const spacer = document.createElement('div')

    const h2 = document.createElement('h2');
    h2.textContent = 'Contacts';

    const btn = document.createElement('button');
    btn.textContent = '+';
    btn.setAttribute('type', 'button');
    btn.setAttribute('id', 'plus');

    header.appendChild(spacer);
    header.appendChild(h2);
    header.appendChild(btn);
    document.body.appendChild(header);

    document.querySelector('#plus').addEventListener('click', plus)

    contacts.sort((a, b) => {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
        } else if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1
        }
        return 0;
    })

    const ul = document.createElement('ul');
    contacts.map(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.firstName} ${contact.lastName}`
        li.setAttribute('id', contact.id);
        li.setAttribute('class', 'contact');
        ul.appendChild(li);
    })
    document.body.appendChild(ul);
    document.querySelector('ul').addEventListener('click', viewDetails)

    document.querySelectorAll('ul').forEach(each => {
        each.addEventListener('touchstart', (e) => {
            e.target.classList.add('active-li')
        })
    })
    document.querySelectorAll('ul').forEach(each => {
        each.addEventListener('touchend', (e) => {
            e.target.classList.remove('active-li')
        })
    })
}

function renderContactView(contact) {
    //takes info about a single contact and renders their info to the screen
    const top = document.createElement('div');
    top.setAttribute('class', 'top');

    const backBtn = document.createElement('button');
    backBtn.innerHTML = "< Contacts";
    backBtn.setAttribute('id', 'back');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('id', 'edit');

    const nameCard = document.createElement('div');
    nameCard.setAttribute('class', 'nameCard');
    const picture = document.createElement('img');
    picture.setAttribute('src', contact.imgSrc);
    picture.setAttribute('alt', contact.firstName);
    picture.setAttribute('class', 'profile-pic');
    const name = document.createElement('h2');
    name.textContent = `${contact.firstName} ${contact.lastName}`;
    nameCard.appendChild(picture);
    nameCard.appendChild(name);

    top.appendChild(backBtn);
    top.appendChild(editBtn);
    top.appendChild(nameCard)

    document.body.appendChild(top);

    function createInfoDiv(myLabel, myContent) {
        //returns one div for keeping a piece of data in.
        const div = document.createElement('div');
        div.setAttribute('class', 'infoBlock');

        const label = document.createElement('p');
        label.setAttribute('class', 'infoLabel');
        label.textContent = myLabel;

        const content = document.createElement('p');
        content.setAttribute('class', 'infoContent');
        content.textContent = myContent;

        div.appendChild(label);
        div.appendChild(content);

        return div
    }

    const main = document.createElement('div');

    const phone = createInfoDiv('phone', contact.phone);
    const email = createInfoDiv('email', contact.email);
    const address = createInfoDiv('address', contact.address);
    const notes = createInfoDiv('notes', contact.notes);

    main.appendChild(phone);
    main.appendChild(email);
    main.appendChild(address);
    main.appendChild(notes);

    document.body.appendChild(main);



    document.querySelector('#back').addEventListener('click', back);
    document.querySelector('#edit').addEventListener('click', () => {
        edit(contact)
    });
}

function renderEditView(contact, edit = false) {
    //Renders edit view and fills in form with information
    const top = document.createElement('div');
    top.classList.add('edit-header');

    const picture = document.createElement('div');
    if (edit) {
        picture.innerHTML = `
        <img src="${contact.imgSrc}" alt="profile-img" id="output">
        <input type="file" id="file" accept="image/gif, image/jpeg, image/png" name="image"  style="display: none">
        <label for="file">Add Photo</label>
        `
    } else {
        picture.innerHTML = `
        <img src="" alt="profile-img" id="output">
        <input type="file" id="file" accept="image/gif, image/jpeg, image/png" name="image"  style="display: none">
        <label for="file">Add Photo</label>
        `
    }
    picture.classList.add('profile-pic-div');
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id', "cancelBtn")
    cancelBtn.innerHTML = "Cancel";

    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('id', "doneBtn");
    doneBtn.innerHTML = "Done";

    const h2 = document.createElement('h2');
    if (edit) {
        h2.textContent = `Edit Contact`
    } else {
        h2.textContent = 'New Contact';
    }

    top.appendChild(cancelBtn);
    top.appendChild(h2);
    top.appendChild(doneBtn);
    top.appendChild(picture);

    document.body.appendChild(top);

    const form = document.createElement('form');

    if (edit) {
        form.innerHTML = `
        <div class="form" id=${contact.id}>
        <label for="fname" class="editLabel"><div class="label">First Name:</div><input type="text" id="fname" class="input" value="${contact.firstName}"></label>
        <label for="lname"><div class="label">Last Name:</div><input type="text" id="lname" class="input" value="${contact.lastName}"></label>
    
        <label for="tel" class="editLabel"><div class="label">Phone</div><input type="tel" id="tel" class="input" value="${contact.phone}"></label>
        <label for="email" class="editLabel"><div class="label">Email</div><input type="email" id="email" class="input" value="${contact.email}"></label>
        <label for="address" class="editLabel"><div class="label">Address</div><input type="text" id="address" class="input" value="${contact.address}"></label>
    
        <label for="notes" class="editLabel"><div class="label">Notes</div><textarea id="notes" class="input">${contact.notes}</textarea></label>
    
        <button type="button" id="deleteBtn" class="delete">Delete Contact</button>
        </div>
        `
    } else {
        form.innerHTML = `
        <div class="form" id=${createId()}>
        <label for="fname" class="editLabel"><div class="label">First Name:</div><input type="text" id="fname" class="input" value="${contact.firstName}"></label>
        <label for="lname"><div class="label">Last Name:</div><input type="text" id="lname" class="input" value="${contact.lastName}"></label>
    
        <label for="tel" class="editLabel"><div class="label">Phone</div><input type="tel" id="tel" class="input" value="${contact.phone}"></label>
        <label for="email" class="editLabel"><div class="label">Email</div><input type="email" id="email" class="input" value="${contact.email}"></label>
        <label for="address" class="editLabel"><div class="label">Address</div><input type="text" id="address" class="input" value="${contact.address}"></label>
    
        <label for="notes" class="editLabel"><div class="label">Notes</div><textarea id="notes" class="input">${contact.notes}</textarea></label>

        </div>
        `
    }

    document.body.appendChild(form);

    let url = ''
    document.querySelector('#file').addEventListener('change', (e) => {
        let image = document.getElementById('output');
        let file = e.target.files[0];
        imageToString(file, image)


    })

    document.querySelector('#cancelBtn').addEventListener('click', cancel);
    document.querySelector('#doneBtn').addEventListener('click', contact => {
        done(contact, edit);
    });

    if (edit) {
        document.querySelector('#deleteBtn').addEventListener('click', () => {
            deleteContact(contact);
        });
    }

}

function clearScreen() {
    //takes existing content off of the screen
    document.body.innerHTML = "";
}

export {
    renderDefaultView,
    renderEditView,
    renderContactView,
    clearScreen
};