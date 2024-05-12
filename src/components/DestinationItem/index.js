// Write your code here
import './index.css'

const SearchItem = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem
  return (
    <li className="container">
      <img alt={name} className="img" src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default SearchItem
