import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";

export const QuantityButton = ({moneyAdd, moneyMinus}) => {
  const [value, setValue] = useState(1);
  const add =() =>{
    setValue(value + 1);
    moneyAdd();
  }
  const minus =()=>{
    if(value>1){
      setValue(value -1);
      moneyMinus();
    }
  }
  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  

  return (
    <ToggleButtonGroup
      className="me-3  "
      type="checkbox"
      
      style={{ maxHeight: "48px" }}
    >
      <ToggleButton
        id="tbg-btn-1"
        
        className="fw-bolder fs-4"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "hsl(26, 100%, 55%)",
        }}
        onClick={minus}>
        -
      </ToggleButton>

      <ToggleButton
        id="tbg-btn-2"
        
        className="fw-bolder fs-6 "
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "black",
        }}
      >
        {value}
      </ToggleButton>

      <ToggleButton
        id="tbg-btn-3"
        
        className="fw-bolder fs-4"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "hsl(26, 100%, 55%)",
        }}
       onClick={add} >
        +
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

// render(<ToggleButtonGroupControlled />);
