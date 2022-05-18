//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi={
    key:"04f421232a60935253087341d41f89af",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const inputBox= document.getElementById("inputBox");

const date= document.getElementById("date");
const temprature= document.getElementById("temprature");
const max= document.getElementById("max");
const clear= document.getElementById("clear");
const city1= document.getElementById('city1');

inputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
    console.log(inputBox.value);
    getWeatherReport(inputBox.value)
}
});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    city1.innerText= `${weather.name}, ${weather.sys.country}`;

    temprature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    max.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c Min/${Math.ceil(weather.main.temp_max)} &deg;C Max`;

    clear.innerText=`${weather.weather[0].main}`

    let todayDate = new Date();
    date. innerText= dateManage(todayDate);
}

function dateManage(dateArg)
{
    
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

    
}