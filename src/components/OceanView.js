import React from 'react';

function OceanView({ selectedOrgan }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
      {selectedOrgan ? (
        <>
          <img
            src={selectedOrgan.oceanImage}
            alt={selectedOrgan.oceanEquivalent}
            className="w-fit"
          />
          <div className="mt-4 bg-white p-4 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">{selectedOrgan.oceanEquivalent}</h2>
            <p className="text-gray-700">{selectedOrgan.text}</p>
          </div>
        </>
      ) : (
        <div className="text-gray-500 text-center">
          Cliquez sur un organe du corps humain pour voir son équivalent océanique.
        </div>
      )}
    </div>
  );
}

export default OceanView;
