
// let current = {} // 
let daily_forecast = [] // 5-day

let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function forecast_output () {
    console.log(daily_forecast);

    let cd = new Date( daily_forecast[0].dt).getDay();

    for (let i = 0; i < daily_forecast.length && i < 5 ; i++){
        console.log(i)
        let day = daily_forecast[i];

        let data = document.querySelector("#data-"+i);
        data.textContent = daysArray[(cd + i) % 7]

        let temp = document.querySelector("#temp-"+i);
        temp.textContent = Math.round(day.temp.day, 0);
        let d = document.querySelector("#daily-description-"+i);
        d.textContent = day.weather[0].description;
        let iconurl = document.querySelector("#iconurl-"+i);
        iconurl.src = "http://openweathermap.org/img/w/" +day.weather[0].icon+ ".png";
    }
}

async function FetchForecast(){
    let lat  = 	20.422984
    let lon  = 	-86.922343
    let url = "https://api.openweathermap.org/data/2.5/onecall?id=524901&appid=6012b03278f12830c67408ce29eef0f5&units=imperial&lat="+lat+"&lon="+lon+"&exclude=hourly"
    await fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((dailyJSON) => {
        console.log(dailyJSON)
    daily_forecast = dailyJSON.daily
    //forecase = dailyJSON.forecast.weather
    // console.log(forecast)
    //     wdata = weatherJSON.data.results;
    });
    forecast_output();
}
FetchForecast();