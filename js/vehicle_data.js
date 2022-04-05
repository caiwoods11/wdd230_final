async function FetchVehicles(){
    let url = "data/vehicles.json"
    await fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((vehicleJSON) => {
        console.log(vehicleJSON)
        return vehicleJSON;
        //forecase = dailyJSON.forecast.weather
        // console.log(forecast)
        //     wdata = weatherJSON.data.results;
    });
}
let data = FetchVehicles();