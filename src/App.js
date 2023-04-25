import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Secondary from './components/secondary/Secondary';

function App() {

  const apiKey = 'f2139a7ba4e35840983f00604484496a';
  const city = 'London';
  const countryCode = 'uk';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=147422&appid=${apiKey}`;
                  
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the weather data here
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });

  return (
    <div className="App">
      <Main />
      <Secondary />
    </div>
  );
}

export default App;


