// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="image-item" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
