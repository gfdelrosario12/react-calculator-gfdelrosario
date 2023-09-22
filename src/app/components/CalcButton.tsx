import React from "react";

// Define the props interface
interface CalcButtonProps {
  number: number;
  onClick: () => void;
}

// Use the correct props type
export default function CalcButton(props: CalcButtonProps) {
  const handleButtonClick = () => {
    alert(props.number);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 m-2"
        onClick={handleButtonClick}
      >
        <p>{props.number}</p>
      </button>
    </div>
  );
}
