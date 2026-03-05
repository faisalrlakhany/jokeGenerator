
const funnyJokeApi = 'https://api.api-ninjas.com/v1/jokes'

const jokeText = document.querySelector(".joke-text")
const generateJokes = async (api) => {



    const response = await fetch(api, {
        method: "GET",
        headers: {
            "X-Api-Key": "bpaKtt7r1LWzRmdQ1sP5DSubBzKhUoAzA90R2gYB"
        }
    });

    const data = await response.json()

    data.forEach(joke => {

        jokeText.innerHTML = joke.joke

    });

}


const generateBtn = document.querySelector(".generate-btn")

generateBtn.addEventListener("click", function () {
    jokeText.innerHTML = "Loading joke..."
    generateJokes(funnyJokeApi)
})


generateJokes(funnyJokeApi)
