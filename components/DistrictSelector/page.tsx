'use client';
import React from 'react';

const districts = [
  'Ampara',
  'Anuradhapura',
  'Badulla',
  'Batticaloa',
  'Colombo',
  'Galle',
  'Gampaha',
  'Hambantota',
  'Jaffna',
  'Kalutara',
  'Kandy',
  'Kegalle',
  'Kilinochchi',
  'Kurunegala',
  'Mannar',
  'Matale',
  'Matara',
  'Monaragala',
  'Mullaitivu',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Puttalam',
  'Ratnapura',
  'Trincomalee',
  'Vavuniya',
];

interface Props {
  setSelectedDistrict: (district: string) => void;
}

const DistrictSelector: React.FC<Props> = ({ setSelectedDistrict }) => {
  const handleDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const district = event.target.value.trim();
    if (districts.includes(district)) {
      setSelectedDistrict(district);
    }
  };

  return (
    <div className="w-full max-w-lg px-4">
      <div className="flex bg-white rounded-md mt-12">
        <input
          type="text"
          list="sri-lanka-districts"
          placeholder="Search your District"
          className="w-full py-2 px-2 outline-none"
          onChange={handleDistrictChange}
        />
        <datalist id="sri-lanka-districts">
          {districts.map((district) => (
            <option key={district} value={district} />
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default DistrictSelector;
