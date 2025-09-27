import Select from "react-select";
import states from "../../data/states.json";
import React, { useState } from 'react';

const customStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      width: '100%',
        padding: '4px',
        border: '1px solid #E4E7E9',
        borderRadius: '2px',
    })
  };

function StateSelector() {
    const [selectedState, setSelectedState] = useState();
    
  return (
    <div className="input-label">
        <label>State</label>
        <Select
            className='state-select'
            options={states}
            placeholder="Select a state"
            isClearable
            styles={customStyles}
            onChange={setSelectedState}
            required
        />
        <input
            type="hidden"
            name="state"
            value={selectedState ? selectedState.value : ""}
        />
    </div>
  );
}

export default StateSelector;
