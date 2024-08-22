function Avatar({ avatar, toggleDeletePopup, styles, setIdToDelete }) {
  return (
    <div
      className="avatar"
      style={{ backgroundColor: styles.backgroundColor, color: styles.color }}
    >
      <span
        className="cross"
        onClick={() => {
          setIdToDelete(avatar.id);
          toggleDeletePopup();
        }}
      >
        &times;
      </span>
      {avatar.name.slice(0, 1).toUpperCase()}
    </div>
  );
}

export default Avatar;
