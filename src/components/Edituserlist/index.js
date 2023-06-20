import './index.css'

const UserItem = props => {
  const {passwordDetails, onDelete} = props
  const {id, userName, userEmails, userNumber} = passwordDetails
  const firstLetter = userName.split('').slice(0, 1)

  const deleteuserNumberItem = () => {
    onDelete(id)
  }
  const deleteBtn =
    'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'

  return (
    <li className="password-item-list-container">
      <div className="first-letter-container">
        <p>{firstLetter[0].toUpperCase()}</p>
      </div>
      <div className="personal-details">
        <div className="web-details-container">
          <p className="details">{userName}</p>
          <p className="details">{userEmails}</p>
          <p className="details">{userNumber}</p>
        </div>
        <button
          type="button"
          className="button-container"
          onClick={deleteuserNumberItem}
        >
          <img alt="delete" src={deleteBtn} className="delete-icon" />
        </button>
      </div>
    </li>
  )
}
export default UserItem

