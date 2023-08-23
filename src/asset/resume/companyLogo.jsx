import React from "react";

const TCSLogo = () => {
  const logoStyle = {
    display: "inline-block",
    backgroundColor: "#E2006A",
    borderRadius: "50%",
    padding: "10px",
    marginRight: "10px",
  };

  const textStyle = {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={logoStyle}></div>
      <div style={textStyle}>TCS</div>
    </div>
  );
};

export default TCSLogo;
