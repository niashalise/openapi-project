const more = document.getElementById('more-info');
const pic = document.getElementById('food-pic');

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

        pic.innerHTML = "";
        pic.append(imageElement);
    })
    .catch(error => console.error("Error: ", error));

