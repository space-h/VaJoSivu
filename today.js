
let btnState0 = false;
const getWeather = async () => {
    if (btnState0) {
        document.getElementById("saa").innerText = "";
        btnState0 = false;
    } else {
        try {

    async function fetchData() {
      try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5963687a74fe487fa31115547232702&q=Tampere&aqi=no');
        const json = await response.json();
        let weatherData = json["current"];
        let locationData = json["location"];
        total = "Current weather\nLocation: " + locationData.name + "\nTemperature: " + weatherData.temp_c + " celsius\nCondition: " + weatherData.condition.text;


      } catch (error) {
        console.log(error);
      }

  
    }
    await fetchData();
    
    // This sets the HTML element
    document.getElementById("saa").innerText = total;
    btnState0 = true;
  } catch (error) {
    console.error(error);
  }
}
};

document.getElementById("get-weather-btn").addEventListener("click", getWeather);





