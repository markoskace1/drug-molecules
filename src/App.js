import React, { useState } from "react";
import Slider from "./Slider";
import DrugNames from "./DrugNames";
import Fingerprints from "./Fingerprints";
import Results from "./Results";

function App() {
  const [selectedDrugName, setSelectedDrugName] = useState("Abacavir");
  const [selectedFingerprint, setSelectedFingerprint] = useState("Morgan");
  const [similarityValue, setSimilarityValue] = useState(0);
  const [finalValues, setFinalValues] = useState([]);

  const handleSubmit = () => {
    setFinalValues([selectedDrugName, selectedFingerprint, similarityValue]);
  };

  return (
    <>
      <section className="flex flex-row p-4 space-x-4">
        {/* SEARCH */}

        <div className="flex flex-col justify-center w-full h-[600px] max-w-xs p-4 bg-blue-100">
          {/* Input SMILEs */}
          <input
            type="text"
            placeholder="Input SMILEs here ..."
            disabled={true}
            className="input w-full max-w-xs mb-8 bg-blue-200 placeholder:text-blue-400"
          />
          {/* Drug Name */}
          <DrugNames
            selectedDrugName={selectedDrugName}
            setSelectedDrugName={setSelectedDrugName}
          />

          <span className="text-xl font-bold my-8 text-blue-400">Filters</span>

          {/* Fingerprints */}
          <Fingerprints
            selectedFingerprint={selectedFingerprint}
            setSelectedFingerprint={setSelectedFingerprint}
          />

          {/* Similarity */}
          <Slider
            similarityValue={similarityValue}
            setSimilarityValue={setSimilarityValue}
          />

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="w-36 p-2 mt-24 rounded-xl font-bold spacing tracking-widest text-white bg-blue-300 hover:bg-blue-400"
          >
            SUBMIT
          </button>
        </div>

        {/* RESULTS */}
        <div>
          <Results finalValues={finalValues} />
        </div>
      </section>
    </>
  );
}

export default App;
