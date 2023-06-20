import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import UserItem from '../Edituserlist'

import './index.css'

class UserFormManager extends Component {
  state = {
    usernameInput: '',
    useremailInput: '',
    userNumber: '',
    userItemList: [],
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({useremailInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userNumber: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddPasswordItem = event => {
    event.preventDefault()

    const {usernameInput, useremailInput, userNumber} = this.state
    if (usernameInput !== '' && useremailInput !== '' && userNumber !== '') {
      const updateduserItemList = {
        id: uuidv4(),
        userName: usernameInput,
        userEmails: useremailInput,
        userNumber: userNumber,
      }
      this.setState(prevState => ({
        userItemList: [
          ...prevState.userItemList,
          updateduserItemList,
        ],
        usernameInput: '',
        useremailInput: '',
        userNumber: '',
      }))
    }
  }

  onDelete = id => {
    const {userItemList} = this.state
    const newPasswordItemList = userItemList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({
      userItemList: newPasswordItemList,
    })
  }

  getFilterList = () => {
    const {userItemList, searchInput} = this.state
    const filteredPasswordList = userItemList.filter(eachPassword =>
      eachPassword.userName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredPasswordList
  }

  render() {
    const {
      usernameInput,
      useremailInput,
      userNumber,
      searchInput,
    } = this.state

    const updatedResultList = this.getFilterList()
    const passwordCount = updatedResultList.length

    return (
      <div className="app-container">
        <div className="password-manager-container">
          <h1 class="main-heading">User Validation Form</h1>
          <div className="password-input-search-container">
            <img
              className="password-manager-image"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <form
              className="input-search-container"
              onSubmit={this.onAddPasswordItem}
            >
              <h1 className="heading">Add New User</h1>
              <div className="input-website-container">
                <div className="input-logo">
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Username"
                    onChange={this.onChangeWebsite}
                    value={usernameInput}
                  />
                </div>
              </div>
              <div className="input-website-container">
                <div className="input-logo">
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter Email"
                    onChange={this.onChangeUsername}
                    value={useremailInput}
                  />
                </div>
              </div>
              <div className="input-website-container">
                <div className="input-logo">
                  <input
                    type="number"
                    className="input"
                    placeholder="Enter Phone Number"
                    onChange={this.onChangePassword}
                    value={userNumber}
                  />
                </div>
              </div>
              <div className="button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="password-details-container">
            <div className="text-image-input-container">
              <div className="text-and-count-container">
                <h1 className="password-item-heading">User Details</h1>
                <div className="count-container">
                  <p className="count">{passwordCount}</p>
                </div>
              </div>
              <div className="password-item-search-container">
                <div className="input-website-logo">
                  <img
                    className="search"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </div>
                <div className="input-logo">
                  <input
                    className="input"
                    type="search"
                    placeholder="search"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                  />
                </div>
              </div>
            </div>
            <hr className="line" />
            {updatedResultList.length === 0 ? (
              <div className="no-password-container">
                <img
                  className="password-manager-image"
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                />
                <p className="no-passwords-text">No Users</p>
              </div>
            ) : (
              <ul className="output-list-container">
                {updatedResultList.map(eachItem => (
                  <UserItem
                    passwordDetails={eachItem}
                    key={eachItem.id}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default UserFormManager
