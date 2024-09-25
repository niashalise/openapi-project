const foodData = document.getElementById('food-data');
const info = document.querySelector('.food-data');
const fruits = document.querySelectorAll('.fruits');

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

//get the fruit from the url
const fruit = getQueryParam('fruit');

//fetch

    const appKey = 'd3146669eb52ad43c03c768625e46c7c';
    const appId = '9962b060';
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(fruit)}`;
        
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: " + response.statusText);
        }
            
        return response.json();
    })
    .then(data => {
        console.log(data);
        info.innerText = `Health information: ` + data.healthLabels;
        return foodData;
        })
    .catch(error => console.error("Error: ", error));

