'use client';
import React, { useState } from 'react';
import DistrictSelector from '@/components/DistrictSelector/page';
import Map from '@/components/Map/page';
import Recent_Location from '@/components/Recent_Location/page';

const BattiWeatherInterface = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-200 via-teal-600 to-blue-50">
      <div className="flex flex-col items-center justify-center h-1/2">
        <div className="w-full max-w-lg px-4">
          <DistrictSelector setSelectedDistrict={setSelectedDistrict} />

          <Recent_Location selectedDistrict={selectedDistrict} />
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
