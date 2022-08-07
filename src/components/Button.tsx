import React from "react";

const Button = ({
  color,
  bgColor,
  text,
  size,
  borderRadius,
}: {
  color: any;
  bgColor: any;
  text: String;
  size?: any;
  borderRadius: any;
}) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export { Button };
