const TomorrowGetWeather = async () => {
    try {
      // FETCH AND PARSE LOGIC HERE
  
      async function fetchData4Tommorw() {
        try {
          const response4Tomorrow = await fetch('http://api.weatherapi.com/v1/forecast.json?key=5963687a74fe487fa31115547232702&q=Tampere&days=1&aqi=no&alerts=no');
          const json4tomorrow = await response4Tomorrow.json();
          let weatherDataTMR = json4tomorrow["current"];
          let locationDataTMR = json4tomorrow["location"];
          total2 = "Tomorrow" + "\nLocation: " + locationDataTMR.name + "\nTemperature: " + weatherDataTMR.temp_c + " celsius\nCondition: " + weatherDataTMR.condition.text;
  
  
        } catch (error) {
          console.log(error);
        }
  
    
      }
      await fetchData4Tommorw();
      
      // This sets the HTML element
      document.getElementById("huominensaa").innerText = total2;
    } catch (error) {
      console.error(error);
    }
  };
  
  
  // This sets the HTML element event listener
  document.getElementById("get-weatherTomorrow-btn").addEventListener("click", TomorrowGetWeather);