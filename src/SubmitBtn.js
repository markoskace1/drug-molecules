import React from "react";

function SubmitBtn({
  selectedDrugName,
  selectedFingerprint,
  similarityValue,
  setFinalValues,
}) {
  const handleSubmit = () => {
    setFinalValues([]);
  };

  return (
    <button
      type="button"
      onClick={() => handleSubmit()}
      className="w-36 p-2 mt-24 rounded-xl font-bold spacing tracking-widest text-white bg-blue-300 hover:bg-blue-400"
    >
      SUBMIT
    </button>
  );
}

export default SubmitBtn;
