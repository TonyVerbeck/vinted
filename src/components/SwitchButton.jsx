import Switch from "react-switch";

const SwitchButton = ({ sortPrice, setSortPrice }) => {
  return (
    <>
      <div className="switch-price">
        <p>Trier par prix : </p>
        <Switch
          onChange={() => {
            setSortPrice(!sortPrice);
          }}
          checked={sortPrice}
          onColor="#2cb1ba"
          offColor="#2cb1ba"
          handleDiameter={17}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.1)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.1)"
          height={20}
          width={42}
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#000000",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <span>⇣</span>
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#000000",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <span>⇡</span>
            </div>
          }
        />
      </div>
    </>
  );
};

export default SwitchButton;
