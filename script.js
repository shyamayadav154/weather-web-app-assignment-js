const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = '0efcd97f482bfb40530761f790a032d3'

const input = document.querySelector('.query')
const result = document.querySelector('.result')
const image = document.querySelector('.left')


async function onSubmit(e){
    e.preventDefault()
    const query = input.value
   
        const response = await fetch(`${url}?q=${query}&appid=${apiKey}&units=metric`)
        const data = await response.json()
        console.log(data)
        


     

    result.innerHTML=`<div class='result-container'>
    <h1>City:${data.name} </h1>
    <h3>Condition: ${data.weather[0].main}</h3>
    <h3>Temperature: ${data.main.temp} &deg; C</h3>
    <h3>Wind Speed: ${data.wind.speed} km/h</h3>
    </div>
                    `


        if(data.weather[0].main === 'Clouds'){
            image.innerHTML=`<img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="">`
        }
        if(data.weather[0].main === 'Haze'){
            image.innerHTML=`<img src="https://images.unsplash.com/photo-1613908614131-77aed27b030b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="haze">`
        }
        if(data.weather[0].main === 'Rain'){
            image.innerHTML=`<img src="https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="">`
        }
        if(data.weather[0].main === 'Cold'){
            image.innerHTML=`<img src="https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="">`
        }

}

const submit = document.querySelector('.btn')

submit.addEventListener('click',onSubmit)