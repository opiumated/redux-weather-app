import React, { Component } from "react"
import { connect } from "react-redux"
import Chart from "../components/chart"
import GoogleMap from "../components/google_map"

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //Destructuring
    const {lon, lat } = cityData.city.coord;
    const tmps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    console.log(tmps)
    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={tmps} color="orange" units="K" />
        </td>
        <td><Chart data={pressure} color="black" units="hPa"/></td>
        <td><Chart data={humidities} color="green" units="%"/></td>
      </tr>
    )
  }
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProp({ weather }) {
  return {
    weather
  }
}

export default connect(mapStateToProp)(WeatherList)
