import React from "react";


const ToggleButton = ({ enabled, onClick,disabled }) => {
  console.log(disabled,"disabled");
  return (
    <button className="toggle-container" onClick={onClick} disabled={disabled}>
      <div style={{
        marginLeft:enabled ? "14px":"4px"
      }} className={`toggle-enable ${enabled ? '' : ''}`}></div>
    </button>
  );
};

export default ToggleButton;
