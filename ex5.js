const getWeather = async () => {
  try {
    // DO FETCH AND PARSE LOGIC HERE

    async function fetchData() {
      try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=5963687a74fe487fa31115547232702&q=Tampere&aqi=no');
        const json = await response.json();
        let weatherData = json["current"];
        let locationData = json["location"];
        total = "Location: " + locationData.name + "\nTemperature: " + weatherData.temp_c + " celsius\nCondition: " + weatherData.condition.text;


      } catch (error) {
        console.log(error);
      }

  
    }
    await fetchData();
    
    // This sets the HTML element
    document.getElementById("saa").innerText = total;
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("get-weather-btn").addEventListener("click", getWeather);


const getWeatherTomorrow = async () => {
  try {
    // FETCH AND PARSE LOGIC HERE

    async function fetchData4Tommorw() {
      try {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=5963687a74fe487fa31115547232702&q=Tampere&days=1&aqi=no&alerts=no');
        const json = await response.json();
        let weatherData = json["current"];
        let locationData = json["location"];
        total = "Tomorrow" + "\nLocation: " + locationData.name + "\nTemperature: " + weatherData.temp_c + " celsius\nCondition: " + weatherData.condition.text;


      } catch (error) {
        console.log(error);
      }

  
    }
    await fetchData4Tommorw();
    
    // This sets the HTML element
    document.getElementById("huominensaa").innerText = total;
  } catch (error) {
    console.error(error);
  }
};


// This sets the HTML element event listener
document.getElementById("get-weatherTomorrow-btn").addEventListener("click", getWeatherTomorrow);


