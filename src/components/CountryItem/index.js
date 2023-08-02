import './index.css'

const CountryItem = props => {
  const {countryDetails, toggleVisited} = props
  const {id, isVisited, name} = countryDetails

  const onClickVisitButton = () => {
    toggleVisited(id)
  }

  return (
    <li className="item">
      <h1 className="country-name-heading">{name}</h1>
      {!isVisited ? (
        <button
          onClick={onClickVisitButton}
          type="button"
          className="is-visited-button"
        >
          Visit
        </button>
      ) : (
        <p className="visited-para">Visited</p>
      )}
    </li>
  )
}

export default CountryItem
