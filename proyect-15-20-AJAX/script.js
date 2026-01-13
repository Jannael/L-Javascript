const search = document.querySelector(".search_container_search");
const input = document.querySelector(".search_container_input");

let city = '';
let apiKey = ``;

function getData(city){
    let request = null;

    (XMLHttpRequest) ? request = new XMLHttpRequest()
    : request = new ActiveXObject("Microsoft.XMLHttp")
    
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

    request.send();

    request.addEventListener("load", ()=>{
        let response = JSON.parse(request.response);
        changeValues(response)
    })
}

function updateData(){
    let city = input.value;
    input.value = "";
    getData(city);
}

function changeValues(json){
    const image = document.querySelector(".image_time");
    const data_container = document.querySelector(".data");
    const temperature_container = document.querySelector(".temperature");
    const notFound = document.querySelector(".not-found");

    image.classList.remove("none");
    data_container.classList.remove("none");
    temperature_container.classList.remove("none");

    if(json.cod === `404`){
        image.src = `images/404.png`;
        data_container.style.fontSize = "0";
        temperature_container.style.fontSize = "0";
        notFound.style.fontSize = "2rem";
        return;
    }
    
    data_container.style.fontSize = "1rem";
    temperature_container.style.fontSize = "1rem";
    notFound.style.fontSize = "0";
    
    switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'images/clear.png';
            break;
            
            case 'Rain':
                image.src = 'images/rain.png';
                break;
                
                case 'Snow':
                    image.src = 'images/snow.png';
            break;
            
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
                
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                    
                    default:
                        image.src = '';
                    }
                    
    const temperature = document.querySelector(".temperature_p");
    const weather = document.querySelector(".wheather");
    const humidity = document.querySelector(".humidity_percentage");
    const windSpeed = document.querySelector(".windSpeed_speed");
    
    temperature.innerHTML = `${Math.round(json.main.temp)} <span> °C </span>`;
    weather.innerHTML = json.weather[0].description;
    windSpeed.innerHTML = `${Math.round(json.wind.speed)} km/h`;
    humidity.innerHTML = json.main.humidity;
}

search.addEventListener("click", updateData)
document.addEventListener("keyup", e =>{
    if(e.key == "Enter") updateData();
})
