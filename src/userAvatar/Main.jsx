import { useEffect, useState } from "react";
import { data, colors } from "./data.js";
import "./style.css";
import Avatar from "./Avatar.jsx";
import NewAvatar from "./NewAvatar.jsx";
import NewUserPopUp from "./NewUserPopUp.jsx";
import DeleteUserPopUp from "./DeleteUserPopUp.jsx";

function Main() {
  const [avatars, setAvatars] = useState(data);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [newName, setNewName] = useState("");
  const [idToDelete, setIdToDelete] = useState(null);

  function randomStyles() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function toggleUserPopup() {
    setShowUserPopup((prev) => !prev);
  }

  function toggleDeletePopup() {
    setShowDeletePopup((prev) => !prev);
  }

  function createNewAvatar() {
    const obj = { id: Date.now(), name: newName };
    setAvatars([...avatars, obj]);
    setNewName("");
    toggleUserPopup();
  }

  function deleteAvatar() {
    setAvatars(avatars.filter((avatar) => avatar.id !== idToDelete));
    setIdToDelete(null);
    toggleDeletePopup();
  }
  console.log("idToDelete:" + idToDelete);

  return (
    <>
      <div id="avatars">
        {avatars.map((avatar) => {
          return (
            <Avatar
              key={avatar.id}
              avatar={avatar}
              toggleDeletePopup={toggleDeletePopup}
              styles={randomStyles()}
              setIdToDelete={setIdToDelete}
            />
          );
        })}
        <NewAvatar toggleUserPopup={toggleUserPopup} />

        {showUserPopup ? (
          <NewUserPopUp
            toggleUserPopup={toggleUserPopup}
            newName={newName}
            setNewName={setNewName}
            createNewAvatar={createNewAvatar}
          />
        ) : (
          ""
        )}

        {showDeletePopup ? (
          <DeleteUserPopUp
            toggleDeletePopup={toggleDeletePopup}
            deleteAvatar={deleteAvatar}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Main;
