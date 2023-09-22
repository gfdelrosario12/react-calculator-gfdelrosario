import React from "react";

// Define the props interface
interface CalcOperationsProps {
  operation: string;
}

export default function CalcOperations(props: CalcOperationsProps) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 m-2">
        <p>{props.operation}</p>
      </button>
    </div>
  );
}
