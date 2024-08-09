import './index.css'

const CountryItem = props => {
  const {countryDetails, onAddVisitedCountry} = props
  const {id, name, isVisited} = countryDetails
  const onClickVisit = () => onAddVisitedCountry(id)

  return (
    <li className="country-list-item">
      <span className="country-name">{name}</span>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" className="visit-button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
