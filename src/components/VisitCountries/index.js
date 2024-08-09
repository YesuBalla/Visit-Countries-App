import {Component} from 'react'
import CountryItem from '../CountryItem'
import VisitedCountryItem from '../VisitedCountryItem'

import './index.css'

class VisitCountries extends Component {
  state = {
    visitedCountriesList: [],
    initialCountriesList: [],
  }

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({initialCountriesList})
  }

  onAddVisitedCountry = id => {
    const {initialCountriesList} = this.state
    const updatedList = initialCountriesList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isVisited: true}
      }
      return eachItem
    })

    const filteredItem = initialCountriesList.find(
      eachItem => eachItem.id === id,
    )

    this.setState(prevState => ({
      visitedCountriesList: [
        ...prevState.visitedCountriesList,
        {...filteredItem, isVisited: true},
      ],
      initialCountriesList: updatedList,
    }))
  }

  onRemoveCountry = id => {
    const {visitedCountriesList, initialCountriesList} = this.state
    const updatedVisitedList = visitedCountriesList.filter(
      eachItem => eachItem.id !== id,
    )
    const updatedInitialList = initialCountriesList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isVisited: false}
      }
      return eachItem
    })

    this.setState({
      visitedCountriesList: updatedVisitedList,
      initialCountriesList: updatedInitialList,
    })
  }

  render() {
    const {visitedCountriesList, initialCountriesList} = this.state
    return (
      <div className="app-container">
        <h2 className="countries-heading">Countries</h2>
        <div className="countries-list-container">
          <ul className="countries-list">
            {initialCountriesList.map(eachItem => (
              <CountryItem
                key={eachItem.id}
                countryDetails={eachItem}
                onAddVisitedCountry={this.onAddVisitedCountry}
              />
            ))}
          </ul>
        </div>
        <h2 className="visited-countries-heading">Visited Countries</h2>
        {visitedCountriesList.length === 0 ? (
          <div className="visited-countries-list-container">
            <p className="no-countries-paragraph">No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul className="visited-countries-list">
            {visitedCountriesList.map(eachItem => (
              <VisitedCountryItem
                key={eachItem.id}
                visitedCountryDetails={eachItem}
                onRemoveCountry={this.onRemoveCountry}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default VisitCountries
