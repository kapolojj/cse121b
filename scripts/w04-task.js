/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Johannes Kapolo",

    photo: 30,

    favoriteFoods: [
        'Rice',
        'Tikka Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'Soccer',
        'Sprinting',
        'Gaming',
        'Hiking',
        'Basketball'
    ],
    placesLived:[
        

    ],
};





/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: '🏠 Namibia, Windhoek',
        length:'2 year'
    },
    {
        place: '🏠 Nigeria, Lagos',
        length:'1 year'
    },
    {
        place: ' 🏠 Durban, South Africa',
        length:'2 year'
    }
);



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(joy =>{
    let li = document.createElement('li');
    li.textContent=joy;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */

let placesLivedList = document.getElementById('places-lived');

myProfile.placesLived.forEach(function (placeObj) {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placeObj.place;
    dd.textContent = placeObj.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

