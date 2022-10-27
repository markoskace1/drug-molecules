import React from "react";
import smilesImgData from "./data/smiles_image_map.json";
import drugLikenessData from "./data/drug_likeness_results.json";
import toxicityData from "./data/toxicity_check_results.json";
import similarityData from "./data/similarity.json";

function Results({ finalValues }) {
  let sortedFinalValues = similarityData
    .filter((val) => {
      if (
        finalValues[0] === val[0] &&
        finalValues[1] === val[2] &&
        finalValues[2] > val[3]
      ) {
        return val;
      }
    })
    .sort((a, b) => b[3] - a[3]);

  return (
    <div className="flex flex-row space-x-4 p-6">
      <div className="flex flex-col">
        {sortedFinalValues.map((searchedValue) => {
          return (
            <div className="flex flex-row space-x-10 mb-6 border-b border-dashed border-gray-400">
              <div className="flex flex-col">
                <p className="font-medium">SIMILARITY</p>
                <p className="text-3xl font-semibold">
                  {searchedValue[3].toFixed(2)}
                </p>
                {Object.entries(smilesImgData)
                  .filter((img) => {
                    if (img[0] === searchedValue[1]) {
                      return img;
                    }
                  })
                  .map((resultImg) => {
                    return (
                      <img
                        src={require(`./imgs/${resultImg[1]}`)}
                        alt="img.png"
                        width="300px"
                      />
                    );
                  })}
                <p className="text-xl self-center">{searchedValue[1]}</p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col mb-8 max-w-screen-lg">
                  <p className="underline font-medium">Druglikeness</p>
                  <div className="flex flex-row mt-2 mb-4 flex-wrap">
                    {drugLikenessData[searchedValue[1]]["accepted"].map(
                      (val) => {
                        return (
                          <div>
                            <div className="flex flex-row items-center mr-3">
                              <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {val}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div className="flex flex-row flex-wrap">
                    {drugLikenessData[searchedValue[1]]["rejected"].map(
                      (val) => {
                        return (
                          <div className="flex flex-row items-center mr-3">
                            <svg
                              className="w-7 h-7"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {val}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="flex flex-col mb-8 max-w-screen-lg">
                  <p className="underline font-medium">Toxicity</p>
                  <div className="flex flex-row mt-2 mb-4 flex-wrap">
                    {toxicityData[searchedValue[1]]["accepted"].map((val) => {
                      return (
                        <div>
                          <div className="flex flex-row items-center mr-3">
                            <svg
                              className="w-7 h-7"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {val}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-row flex-wrap">
                    {toxicityData[searchedValue[1]]["rejected"].map((val) => {
                      return (
                        <div className="flex flex-row items-center mr-3">
                          <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {val}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col my-8 max-w-screen-lg">
                    <p className="underline font-medium">Toxicity Structures</p>
                    <div className="flex flex-row mt-2 mb-4 flex-wrap">
                      {toxicityData[searchedValue[1]][
                        "toxic_structures_found"
                      ].map((val) => {
                        return (
                          <div className="flex flex-row mb-2 mr-3">
                            <span className="px-2 bg-gray-100">{val}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
