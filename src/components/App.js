import React, {Component} from 'react'
import Form from './Form'
import Result from './Result'
import './App.css'

const APIkey = 'a47c93363ccc758a680366e62eb7fdcb'

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    curwtr: "",
    error: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()

    const API = 
    `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&lang=pl&appid=${APIkey}&units=metric`;

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("Not working")
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const time = new Date().toLocaleString()
      this.setState(state => ({
        error: false,
        date: time,
        city: state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        curwtr: data.weather[0].description
      }))
    })
    .catch(err => {
      this.setState(state => ({
        error: true,
        city: state.value,
      }))
    })
  }

  render() {
    return (
      <div>
        <Form 
        value = {this.state.value} 
        change={this.handleInputChange} 
        submit={this.handleCitySubmit}
        />
        <Result weather={this.state}/>
      </div>
    )
  }
}

export default App