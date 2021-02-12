// // Contacts example:
//  {
//     firstName: 'name',
//     lastName: '',
//     phone: 123,
//     email: '',
//     address: '',
//     notes: '',
//     id: '',
//     imgSrc: ''
// }
import {
    loadData
} from './data.js';

import {

} from './buttons.js';

import {
    renderDefaultView,
    renderEditView,
    renderContactView,
    clearScreen
} from './render.js';

//Contacts is a global array of the contact information.
let contacts = loadData(); 

renderDefaultView(contacts);

function test(){
    clearScreen()
    renderEditView(contacts[0], true);
}

export {contacts}
