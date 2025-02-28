'use client';
import React from 'react';
import { IoIosPartlySunny } from 'react-icons/io';

const getRandomTemperature = () => [30, 40, 60][Math.floor(Math.random() * 3)];

const Recent_Location = ({ selectedDistrict }: { selectedDistrict: string }) => {
  const temperature = getRandomTemperature();

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mt-8">
        <h3 className="text-white text-sm font-semibold mb-2">RECENT LOCATIONS</h3>
        <div className="bg-teal-700/70 text-white rounded-md w-44 p-4">
          <div className="font-bold text-lg">{selectedDistrict}</div>
          <div className="text-sm mb-2">Sri Lanka</div>
          <div className="flex items-center mt-2">
            <IoIosPartlySunny className="w-6 h-6 text-white mr-2" />
            <div className="text-3xl font-bold">{temperature}°</div>
          </div>
          <div className="text-xs mt-2">RealFeel® {temperature + 5}°</div>
        </div>
      </div>
    </div>
  );
};

export default Recent_Location;
