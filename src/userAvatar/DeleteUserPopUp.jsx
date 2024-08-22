function DeleteUserPopUp({ toggleDeletePopup, deleteAvatar }) {
  return (
    <div className="overlay">
      <div className="popup deleteUserPopup">
        <header>
          <p>Are you sure you want to delete this user?</p>
        </header>
        <footer>
          <button onClick={toggleDeletePopup}>Cancel</button>
          <button onClick={deleteAvatar}>Confirm</button>
        </footer>
      </div>
    </div>
  );
}

export default DeleteUserPopUp;
