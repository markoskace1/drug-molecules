import React, { useState } from "react";
import fingerprintsData from "./data/fingerprints_data.json";

function Fingerprints(props) {
  return (
    <div className="form-control w-full max-w-xs mb-4">
      <label className="label">
        <span className="label-text">FINGERPRINTS</span>
      </label>
      <select
        className="select bg-blue-200"
        value={props.selectedFingerprint}
        onChange={(e) => props.setSelectedFingerprint(e.target.value)}
      >
        {fingerprintsData.map((fingerprint) => {
          return <option value={fingerprint}>{fingerprint}</option>;
        })}
      </select>
    </div>
  );
}

export default Fingerprints;
