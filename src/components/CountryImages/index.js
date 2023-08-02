import './index.css'

const CountryImages = props => {
  const {visitedList, toggleIsVisited} = props
  const {id, imageUrl, name} = visitedList

  const onClickRemove = () => {
    toggleIsVisited(id)
  }

  return (
    <li className="image-list-item">
      <img className="countries-image-list-item" src={imageUrl} alt={name} />
      <div className="bottom-line">
        <h1 className="country-img-heading">{name}</h1>
        <button onClick={onClickRemove} type="button" className="remove-button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryImages
