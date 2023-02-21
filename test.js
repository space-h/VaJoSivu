async function fetchData() {
    try {
      const response = await fetch('https://catfact.ninja/breeds');
      const json = await response.json();
      json.data.map((breed) => {
        console.log(breed.breed + " -- " + breed.country);
      });
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();