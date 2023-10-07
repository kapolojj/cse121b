/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Johannes Kapolo"
    
    // photo: 

    // favoriteFoods: [
    //     'Rice',
    //     'Tikka Masala',
    //     'Prioshki',
    //     'Shrimp',
    //     'Banana Cream Pie'
    // ],

    // hobbies: [
    //     'Soccer',
    //     'Sprinting',
    //     'Gaming',
    //     'Hiking',
    //     'Basketball'
    // ],
    // placesLived:[
        

    // ],
};
document.querySelector('#name').textContent = myProfile.name;






/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'San Francisco, CA',
        length:'1 year'
    }
);



/* DOM Manipulation - Output */
// document.querySelector('#name').textContent = myProfile.name;

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/
myProfile.facourateFood.forEach(food =>{
    let li = document.createElement('li');
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */


/* Places Lived DataList */


