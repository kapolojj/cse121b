/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Johannes Kapolo";
document.querySelector("#name").innerHTML =`<strong>${fullName}</strong>`;
// nameElement.innerHTML = "<strong> ${fullName} </strong>";

let currentYear =  new Date().
getFullYear();


/* Step 3 - Element Variables */

const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");




/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
// imageElement.setAttribute('src',profilePicture);





/* Step 5 - Array */

let foodArray = ['Mango','Banana','Apple','Guava','Orange'];

foodArray.push('Burgers', 'Pizza');
// foodArray.push('Bread', 'Cheese');
// foodArray.push('Burgers', 'Pizza');
// foodArray.push('Bread', 'Cheese');

foodElement.textContent = foodArray;
foodElement.innerHTML += `<br>${foodArray}</br>`;






