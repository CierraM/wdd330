import {contacts} from './main.js';

function loadData() {
    // Checks local storage for any data. Returns list of contacts or empty array. Only called once.
    let data = localStorage.getItem('contacts');

    if (!data) {
        return [];
    } else {
        return JSON.parse(data);
    }
}

function saveToStorage(array) {
    //Overwrites local storage with new data
    window.localStorage.setItem('contacts', JSON.stringify(array));
}

function createId(){
    //This is a function that will create a (most likely) unique id.
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function createNewContact() {
    //creates new object for contact and returns it
    return {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            notes: '',
            id: '',
            imgSrc: ''
        }
}


function saveContact(contact){
    //adds a contact (object) to the global contacts array and passes it to saveToStorage
    contacts.push(contact);
    saveToStorage(contacts);
}

function imageToString(file, image){
    //A function to encode an image to data url. Parameters: file: the file, image: the html element to put it in
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        image.setAttribute("src", reader.result);
    })
    
    reader.readAsDataURL(file);
    


}

export {loadData, saveToStorage, createNewContact, saveContact, createId, imageToString}