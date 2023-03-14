total3 = "";
let btnState2 = false;
const sevenWeather = async () => {
    if (btnState2) {
        document.getElementById("viikkoSaa").innerText = "";
        btnState2 = false;
    } else {
        try {

            
      async function fetchData7Days() {
        try {
          const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5963687a74fe487fa31115547232702&q=Tampere&days=7&aqi=no&alerts=no');
          const json = await response.json();


          let forecastDay = json["forecast"]["forecastday"];
          let sevenDayWeather = forecastDay[6];
          let locationData = json["location"];              
           
          total3 = "Weather in 7 days" + "\nLocation: " + locationData.name + "\nTemperature: " + sevenDayWeather.day.avgtemp_c + " celsius\nCondition: " + sevenDayWeather.day.condition.text + "\nDate: " + sevenDayWeather.date;
          
  
        } catch (error) {
          console.log(error);
        }
  
    
      }
      await fetchData7Days();
      
      // This sets the HTML element
      document.getElementById("viikkoSaa").innerText = total3;
      btnState2 = true;
    } catch (error) {
      console.error(error);
    }
    }
};
  

    document.getElementById("get-sevenWeather-btn").addEventListener("click", sevenWeather);
