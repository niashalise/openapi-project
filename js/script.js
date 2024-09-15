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

const fruits = document.querySelectorAll('.fruits')
const message = document.getElementById('message')

function on() {
    message.style.display = "block";
}

function off() {
    message.style.display = "none"
}



//create event listener that will give a description of each fruit when the fruit is clicked
//edamam site
//make each fruit iterable
fruits.forEach(fruit => {
    //add click event
    fruit.addEventListener("click", (e) => {
        const appKey = 'd3146669eb52ad43c03c768625e46c7c';
        const appId = '9962b060';
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(fruit.id)}`;
        
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error: " + response.statusText);
            }
            
            return response.json();
        })
        .then(data => {
            console.log(data);
            on(message);
            message.innerHTML = data.healthLabels;
            return message;
        })
        .catch(error => console.error("Error: ", error));
        })
})


const postUrl = 'https://api.edamam.com/api/nutrition-details?app_id=9962b060&app_key=d3146669eb52ad43c03c768625e46c7c';
const requestData = {
    title: "string",
    summary: "string",
    ingr: ["string"]
};

fetch(postUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(requestData)
})
.then((response) => {
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
    }
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error("Error: ", error);
})