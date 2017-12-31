import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(evt) {
      this.setState({ term: evt.target.value});
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    //Fetch the weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })

  }

  render() {
    return(
      <form className="form input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term }
          onChange={this.onInputChange.bind(this)  }/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
