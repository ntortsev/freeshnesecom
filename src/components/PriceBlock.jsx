import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
function PriceBlock({ changeRangePrice }) {
  const [value, setValue] = React.useState([20, 37]);
  const [inputMin, setInputMin] = useState("");
  const [inputMax, setInputMax] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendForm = (e) => {
    e.preventDefault();
    changeRangePrice({ min: Number(inputMin), max: Number(inputMax) });
  };

  return (
    <form onSubmit={(e) => sendForm(e)} className="price-block">
      <h1>Price</h1>
      <Box sx={{ width: 250 }}>
        <Slider
          sx={{ color: "#6A983C" }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="price-block__value">
        <div className="price-block__min">
          <span>Min</span>
          <input
            onChange={(e) => setInputMin(e.target.value)}
            className="price-block__input"
            placeholder="0"
            type="number"
          />
        </div>
        <p>-</p>
        <div className="price-block__max">
          <span>Max</span>
          <input
            onChange={(e) => setInputMax(e.target.value)}
            className="price-block__input"
            placeholder="000"
            type="number"
          />
        </div>
      </div>
      <div className="price-block__btn">
        <button className="price-block__btn--green" type="submit">
          Apply
        </button>
        <button className="price-block__btn--inherit" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}

export default PriceBlock;
