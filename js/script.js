//fetch
const apiKey = "live_8MHa7O2P9YSuZSukChUap1VVlx7Fv5ffP76hQbmAbYgLz2O9hW535q9JMwUVYS9w"

fetch('https://api.thedogapi.com/', {
    headers: {'x-api-key': apiKey}
})
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: ", response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error))

