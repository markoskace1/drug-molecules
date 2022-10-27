import React, { useState } from "react";
import drugNamesData from "./data/drug_names.json";

function DrugNames(props) {
  // const [selectedDrugName, setSelectedDrugName] = useState("Abacavir");

  return (
    <select
      className="select w-full max-w-xs mb-8 bg-blue-200"
      value={props.selectedDrugName}
      onChange={(e) => props.setSelectedDrugName(e.target.value)}
    >
      {drugNamesData.map((drugName) => {
        return <option value={drugName}>{drugName}</option>;
      })}
    </select>
  );
}

export default DrugNames;
