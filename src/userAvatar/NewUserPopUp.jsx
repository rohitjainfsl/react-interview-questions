function NewUserPopUp({
  toggleUserPopup,
  newName,
  setNewName,
  createNewAvatar,
}) {
  return (
    <div className="overlay">
      <div className="popup addUserPopup">
        <header>
          <h2>New User</h2>
          <span className="cross" onClick={toggleUserPopup}>
            &times;
          </span>
        </header>
        <main>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </main>
        <footer>
          <button onClick={toggleUserPopup}>Cancel</button>
          <button onClick={createNewAvatar}>Confirm</button>
        </footer>
      </div>
    </div>
  );
}

export default NewUserPopUp;
