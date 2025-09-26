import Select from "react-select";
import states from "../../data/states.json";

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
    
  return (
    <div className="input-label">
      <label>State</label>
      <Select
        className='state-select'
        options={states}
        placeholder="Select a state"
        isClearable
        styles={customStyles}
        required
      />
    </div>
  );
}

export default StateSelector;
