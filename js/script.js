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

const fruits = document.querySelectorAll('.fruits');
const message = document.getElementById('message');
const healthLabels = document.querySelector('.health-labels');
const closeBtn = document.querySelector('.close');
const foodBtn = document.querySelector('.click-me');
const foodContent = document.querySelector('.food-content')

function on() {
    message.style.display = "block";
}

function off() {
    message.style.display = "none"
}

off();

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
            on();
            healthLabels.innerText = data.healthLabels;
            return message;
        })
        .catch(error => console.error("Error: ", error));
    })
})

closeBtn.addEventListener("click", (e) => {
    off();
})

foodBtn.addEventListener("click", (e) => {
    fetch('https://foodish-api.com/api')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: " + response.statusText);
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
        const imageURL = data.image;
        const imageElement = document.createElement('img');
        imageElement.src = imageURL;
        imageElement.alt = "Picture of a random dish";

        foodContent.innerHTML = "";
        foodContent.append(imageElement);
    })
    .catch(error => console.error("Error: ", error));
})

// second fetch
