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
    renderDefaultView
} from './render.js';

//Contacts is a global array of the contact information.
let contacts = loadData(); 

renderDefaultView(contacts);

export {contacts}
