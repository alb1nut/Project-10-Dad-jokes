const jokeEl =document.getElementById('joke')
const jokeBtn =document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', ()=> {
         getJokes()
})
getJokes()

// Using Async await method

async function getJokes(){
    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    const response = await fetch('https://icanhazdadjoke.com',config)
  const data = await response.json()
   jokeEl.innerHTML= data.joke
}


// Using .then method

// function getJokes(){
//     const config ={
//         headers: {
//             'Accept':'application/json'
//         }
//     }

// fetch('https://icanhazdadjoke.com' ,config )
// .then(res => res.json())
// .then(data => {
//     jokeEl.innerHTML = data.joke
// })

// }

