import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const MIN = 0;
const MAX = 500;

const PriceRange = ({ setPriceFilter }) => {
  const [rangeValues, setRangeValues] = useState([10, 100]);

  return (
    <>
      <div className="range-filter">
        <p>Prix entre :</p>
        <Range
          step={5}
          min={MIN}
          max={MAX}
          values={rangeValues}
          onChange={(values) => setRangeValues(values)}
          onFinalChange={(values) => {
            setPriceFilter(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "63%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: rangeValues,
                    colors: ["#ccc", " #2CB1BA", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "17px",
                width: "17px",
                borderRadius: "50%",
                border: isDragged ? "" : "1px solid white",
                backgroundColor: "#2CB1BA",
                outline: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-28px",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "5px",
                  borderRadius: "4px",
                  backgroundColor: "#2CB1BA",
                }}
              >
                {rangeValues[index]}€
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default PriceRange;
