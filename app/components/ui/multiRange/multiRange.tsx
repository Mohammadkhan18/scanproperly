"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import "./style.css";

const MultiRange = ({
  min = 0,
  max = 100,
  onChange,
  disabled,
  values = { min: 0, max: 100 },
}: any) => {
  const [sliderValues, setSliderValues] = useState({ min: min, max: max });

  useEffect(() => {
    setSliderValues({ min: values.min, max: values.max });
  }, [values]);

  const handleSliderChange = (event: any, type: any) => {
    const newValue = parseInt(event.target.value);
    let maxMinValues = { min: min, max: max };

    if (type === "min") {
      if (newValue < sliderValues?.max) {
        setSliderValues({ ...sliderValues, min: newValue });
        maxMinValues = { ...maxMinValues, min: newValue };
      }
    } else if (type === "max") {
      if (newValue > sliderValues?.min) {
        setSliderValues({ ...sliderValues, max: newValue });
        maxMinValues = { ...maxMinValues, max: newValue };
      }
    }

    onChange({ min: maxMinValues?.min, max: maxMinValues?.max });
  };

  return (
    <div className="">
      <input
        type="range"
        min={min}
        max={max}
        disabled={disabled}
        value={sliderValues?.min}
        onChange={(e) => handleSliderChange(e, "min")}
        className="thumb thumb--zindex-3"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={sliderValues?.max}
        disabled={disabled}
        onChange={(e) => handleSliderChange(e, "max")}
        className="thumb thumb--zindex-3"
      />

      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
        <div className="slider__left-value">{sliderValues?.min}</div>
        <div className="slider__right-value">{sliderValues?.max}</div>
      </div>
    </div>
  );
};

export default MultiRange;
