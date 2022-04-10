import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";

export const QuantityButton = () => {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup
      className="me-3  "
      type="checkbox"
      value={value}
      onChange={handleChange}
      style={{ maxHeight: "48px" }}
    >
      <ToggleButton
        id="tbg-btn-1"
        value={1}
        className="fw-bolder fs-4"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "hsl(26, 100%, 55%)",
        }}
      >
        -
      </ToggleButton>

      <ToggleButton
        id="tbg-btn-2"
        value={2}
        className="fw-bolder fs-6 "
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "black",
        }}
      >
        0
      </ToggleButton>

      <ToggleButton
        id="tbg-btn-3"
        value={3}
        className="fw-bolder fs-4"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          borderColor: "lightgray",
          color: "hsl(26, 100%, 55%)",
        }}
      >
        +
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

// render(<ToggleButtonGroupControlled />);
