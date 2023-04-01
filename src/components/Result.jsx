import React from 'react'

const Result = props => {
  const {error, city, temp, date, sunrise, sunset, pressure, wind, curwtr} = props.weather
  
  let content = null;

  if (!error && city) {

    const tempNow = Math.floor(temp)
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    content = (
      <div className='wyniki'>
        <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
        <h4>Dane dla dnia i godziny: <span>{date}</span></h4>
        <h4>Aktualna pogoda: <span>{curwtr}</span></h4>
        <h4>Aktualna temperatura: <span>{tempNow}°C</span></h4>
        <h4>Wschód słońca dzisiaj o: <span>{sunriseTime}</span></h4>
        <h4>Zachód słońca dzisiaj o: <span>{sunsetTime}</span></h4>
        <h4>Aktualna siła wiatru: <span>{wind} m/s</span></h4>
        <h4>Aktualne ciśnienie: <span>{pressure}hPa</span></h4>
      </div>
    )
  }

  return (
    <div className='result'>
      {error ? `Nie mamy w bazie ${city}` : content}
    </div>
  )
}

export default Result