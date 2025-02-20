function fetchWeather(city) {
    return new Promise((reslove)=>{
        setTimeout(() => {
           reslove (`Weather in ${city} is 75F`) 
        }, 2000);
    });
};

fetchWeather("New York").then(result=>{
    console.log(result);
    return fetchWeather("Los Angeles");
})
.then(result=>{
    console.log(result);
    return fetchWeather("Chicago");
})
.then(result=>{
    console.log(result);
    console.log("Weather updates completed!");
})