import React from "react";
import Switch from "react-switch";

const SwitchComponent = ({ label, value, checked, onChange }) => {
    return (
      <div className='switch-custom-block'>
        <label className={`${checked === value ? "customized-label" : ""}`}>
          <Switch
            onChange={() => onChange(value)}
            checked={checked === value}
            className='check-custom'
            // height='17px'
            // width='28px'
            offColor='#fff'
            onColor='#2BD7EF'
            // borderRadius="30px"
          />
          <span>{label}</span>
        </label>
      </div>
    );
};

export default SwitchComponent;
