import React, { useState } from 'react';
import { humanBody } from '../data/organs';
import HumanBody from './HumanBody';
import OceanView from './OceanView';

function MainApp() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 flex-col-reverse md:flex-row">
        {/* Human Body Section */}
        <div className="flex-1 bg-gray-100 order-2 md:order-1 p-4">
          <HumanBody
            image={humanBody.image}
            organs={humanBody.organs}
            onOrganClick={setSelectedOrgan}
          />
        </div>
        {/* Ocean View Section */}
        <div className="flex-1 bg-white order-1 md:order-2 ">
          <OceanView selectedOrgan={selectedOrgan} />
        </div>
      </div>
    </div>
  );
}

export default MainApp;
