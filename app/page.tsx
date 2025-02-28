import React from 'react';

import Districts from '@/components/Districts/page';
import Recent_locations from '@/components/Recent_locations/page';
import Map from '@/components/Map/page';

const BattiWeatherInterface = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-200 via-teal-600 to-blue-50">
      <div className="pt-4 pl-4">
        <div className="text-white text-2xl px-12 font-bold">
          <span className="text-teal-700">Batti</span>Weather
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-1/2">
        <div className="w-full max-w-lg px-4">
          <Districts />

          <Recent_locations />
        </div>
      </div>

      <Map />

      <div className="container mx-auto">
        <div className=""></div>
      </div>
    </div>
  );
};

export default BattiWeatherInterface;
