import './index.css'

const VisitedCountryItem = props => {
  const {visitedCountryDetails, onRemoveCountry} = props
  const {id, name, imageUrl} = visitedCountryDetails
  const onClickRemove = () => {
    onRemoveCountry(id)
  }
  return (
    <li className="country-card-container">
      <img src={imageUrl} alt="thumbnail" className="card-image" />
      <div className="country-card-details">
        <p className="country-card-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
