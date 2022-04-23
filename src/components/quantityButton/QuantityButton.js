import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";

export const QuantityButton = ({ moneyAdd, moneyReduce }) => {
  const [value, setValue] = useState(1);

  const handleOnAdd = () => {
    console.log(value);
    setValue((preValue) => preValue + 1);
    console.log(setValue);
    moneyAdd();
  };

  console.log(value);

  const handleOnSubtraction = () => {
    if (value > 1) {
      setValue((preValue) => preValue - 1);
      moneyReduce();
    }
  };

  return (
    <ToggleButtonGroup
      className="me-3 "
      type="checkbox"
      style={{ maxHeight: "48px" }}
    >
      <ToggleButton
        id="tbg-btn-1"
        value={1}
        className="fw-bolder fs-5 "
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "hsl(26, 100%, 55%)",
        }}
        onClick={handleOnSubtraction}
      >
        -
      </ToggleButton>

      <ToggleButton
        id="tbg-btn-2"
        className="fw-bolder"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "black",
          fontSize: "16px",
        }}
      >
        {value}
      </ToggleButton>

      <ToggleButton
        id="tbg-btn-3"
        className="fw-bolder fs-5"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "hsl(26, 100%, 55%)",
        }}
        onClick={handleOnAdd}
      >
        +
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

// render(<ToggleButtonGroupControlled />);
