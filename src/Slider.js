import React from "react";

function Slider({ setSimilarityValue, similarityValue }) {
  return (
    <div
      data-tip={similarityValue}
      className="flex flex-col max-w-xs tooltip tooltip-open tooltip-bottom text-start"
    >
      SIMILARITY:
      <input
        type="range"
        min="0"
        max="1"
        className="bg-blue-200 rounded-lg"
        value={similarityValue}
        onChange={(e) => setSimilarityValue(e.target.value)}
        step="0.01"
      />
    </div>
  );
}

export default Slider;
