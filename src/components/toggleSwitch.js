import React from "react";
// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ToggleSwitch = ({ data, handleFavorites, favorites }) => {
  const iconColor = favorites.some((mtn) => mtn.id === data.id)
    ? "red"
    : "rgba(199, 202, 205, 1)";

  return (
    <FontAwesomeIcon
      style={{ color: iconColor }}
      icon={faHeart}
      size="2x"
      className="fav-icon"
      onClick={() => {
        handleFavorites(data);
      }}
    />
  );
};

export default ToggleSwitch;
