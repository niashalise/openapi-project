const mango = document.getElementById('mango');
const banana = document.getElementById('banana');
const apple = document.getElementById('apple');
const pineapple = document.getElementById('pineapple');
const orange = document.getElementById('orange');
const kiwi = document.getElementById('kiwi');
const strawberry = document.getElementById('strawberry');
const grape = document.getElementById('grape');
const lychee = document.getElementById('lychee');
const watermelon = document.getElementById('watermelon');
const papaya = document.getElementById('papaya');
const lime = document.getElementById('lime');

const fruits = document.querySelector('.fruits')
//create event listener that will give a description of each fruit when the fruit is clicked
fruits.addEventListener("click", function (e) {
    console.log(mango);
    console.log(apple);
})



//fetch

// REMOVED

// fetch("https://wger.de/api/v2/workout/", {
//     headers: {'x-api-key': apiKey}
// })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Error: ", response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error("Error: ", error))

