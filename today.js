const getWeather = async () => {
  try {
    // DO FETCH AND PARSE LOGIC HERE

    async function fetchData() {
      try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=5963687a74fe487fa31115547232702&q=Tampere&aqi=no');
        const json = await response.json();
        let weatherData = json["current"];
        let locationData = json["location"];
        let total = "Location: " + locationData.name + "\nTemperature: " + weatherData.temp_c + " celsius\nCondition: " + weatherData.condition.text;


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





