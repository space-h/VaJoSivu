let btnState = false;
const TomorrowGetWeather = async () => {
    if (btnState) {
        document.getElementById("huominensaa").innerText = "";
        btnState = false;
    } else {
        try {
      
  
      async function fetchData4Tommorw() {
        try {
          const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5963687a74fe487fa31115547232702&q=Tampere&days=2&aqi=no&alerts=no');
          const json = await response.json();


          let forecastDay = json["forecast"]["forecastday"];
          let tomorrow = forecastDay[1];
          let locationData = json["location"];
          
          
                   
          
          total = "Tomorrow" + "\nLocation: " + locationData.name + "\nTemperature: " + tomorrow.day.avgtemp_c + " celsius\nCondition: " + tomorrow.day.condition.text + "\nDate: " + tomorrow.date;
        } catch (error) {
          console.log(error);
        }
  
    
      }
      await fetchData4Tommorw();
      
      // This sets the HTML element
      document.getElementById("huominensaa").innerText = total;
      btnState = true;
    } catch (error) {
      console.error(error);
    }
    }
    
  };

  
  // This sets the HTML element event listener
  document.getElementById("get-weatherTomorrow-btn").addEventListener("click", TomorrowGetWeather);