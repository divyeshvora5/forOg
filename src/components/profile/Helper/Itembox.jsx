import React from "react";
import styled, { keyframes } from "styled-components";

import {
  getUserService,
  addNotificationPreference,
} from "@/redux/services/globalServices";
import { useEditUser } from "@/hooks/useProfileHook";
import { getUserAction } from "@/redux/actions/globalAction";

const Itembox = ({
  title,
  dec,
  mainObj,
  type,
  name,
  isChecked,
  account,
  loading,
  updatePreference,
  isAllowed
}) => {
  const handleCheckboxChange = async () => {
    const value = !isChecked ;
    console.log(mainObj,"mainObj");
    updatePreference(mainObj, type, value);
  };

  return (
    <div className={`notification-item-list ${isAllowed ? "":"pointer-events-none opacity-50"}`}>
      <input
        type="checkbox"
        className="notification-checkbox"
        checked={isChecked}
        disabled={loading}
        onChange={handleCheckboxChange}
      />

      <div className="notification-item-sub-box">
        <div className="notification-item-text">{title}</div>
        <div className="notification-item-sub-text">{dec}</div>
      </div>
    </div>
  );
};

export default Itembox;
