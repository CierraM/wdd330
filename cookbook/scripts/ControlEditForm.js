// This file controls the logic of the edit form. It makes sure the form is properly rendered, adds the correct event listeners, and handles input

import EditForm from './EditForm';
import FetchData from './FetchData';
 
export default class ControlEditForm {
    constructor(){
        const form = new EditForm();
        const updateDatabase = new UpdateDatabase();
        const fetchData = new FetchData();
    }
}
