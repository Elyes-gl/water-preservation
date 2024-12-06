import React, { useState } from 'react';

function HumanBody({ image, organs, onOrganClick }) {
  const [hoveredOrgan, setHoveredOrgan] = useState(null);

  // Tooltip positioning logic
  function getTooltipPositionStyles(organ) {
    const topPercent = parseFloat(organ.position.top);
    const leftPercent = parseFloat(organ.position.left);

    let finalTop = '-120%';
    let finalLeft = '50%';
    let transformX = '-50%';
    let transformY = '-100%';

    if (topPercent < 20) {
      finalTop = '110%';
      transformY = '0%';
    }
    if (topPercent > 80) {
      finalTop = '-120%';
      transformY = '-100%';
    }
    if (leftPercent > 80) {
      finalLeft = '100%';
      transformX = '-100%';
    }
    if (leftPercent < 20) {
      finalLeft = '0%';
      transformX = '0%';
    }

    return {
      top: finalTop,
      left: finalLeft,
      transform: `translate(${transformX}, ${transformY})`,
    };
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Human Body Container */}
      <div
        className="relative bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          width: '90%', // Default width: 90% of the parent container
          maxWidth: '500px', // Maximum width for larger screens
          aspectRatio: '3/4', // Maintain a fixed aspect ratio (3:4 for human body)
        }}
      >
        {organs.map((organ) => (
          <div
            key={organ.id}
            className="absolute cursor-pointer"
            style={{
              top: organ.position.top,
              left: organ.position.left,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHoveredOrgan(organ)}
            onMouseLeave={() => setHoveredOrgan(null)}
            onClick={() => onOrganClick(organ)}
          >
            <span
              className="block w-4 h-4 bg-green-700 rounded-full border-2 border-white hover:scale-110"
              title={organ.name}
            />
            {hoveredOrgan && hoveredOrgan.id === organ.id && (
              <div
                className="absolute bg-white text-gray-800 text-sm p-2 shadow-lg w-64 md:w-80 rounded-lg"
                style={getTooltipPositionStyles(organ)}
              >
                <strong className="font-bold">{hoveredOrgan.name}</strong>
                <p className="mt-1 text-gray-600">{hoveredOrgan.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HumanBody;
