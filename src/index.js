import {getUsers, deleteUsers} from './api/userApi'; 
import './index.css'; 
// import numeral from 'numeral'; 

// /* eslint-disable no-console*/

// const value = numeral(1000).format('$0,0.00'); 
// //debugger; 
// console.log(`I would pay ${value} for this JS Dev-Env`); 

// Populate table of user via API call 
getUsers().then(result => {
    let usersBody = ""; 
    
    result.forEach(user => {
        usersBody+= `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            </tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser'); 

    // MUST use array.from to create real array from a DOM collection since getElementByClassName returns only "array like" objects
    Array.from(deleteLinks, link => {
        link.onclick = function (event){
            const element = event.target; 
            event.preventDefault(); 
            deleteUsers(element.attributes["data-id"].value); 
            const row = element.parentNode.parentNode; 
            row.parentNode.removeChild(row); 
        }; 
    }); 

});
