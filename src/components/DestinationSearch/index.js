import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredSearchInput = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <div className="destination-cont">
          <h1 className="heading">Destination Search</h1>

          <div className="search-cont">
            <input
              className="in"
              type="search"
              onChange={this.searchUserInput}
              value={searchInput}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="logo"
              alt="search icon"
            />
          </div>
          <ul className="items-cont">
            {filteredSearchInput.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
