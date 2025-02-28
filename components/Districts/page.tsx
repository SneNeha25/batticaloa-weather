import React from 'react';

import { IoIosSearch } from 'react-icons/io';

const Districts = () => {
  return (
    <div className="flex bg-white rounded-md">
      <div className="p-3">
        <IoIosSearch className="text-gray-400" size={20} />
      </div>
      <input
        type="text"
        list="sri-lanka-districts"
        placeholder="Search your Address, City or Zip Code"
        className="w-full py-2 px-2 outline-none"
      />
      <datalist id="sri-lanka-districts">
        <option value="Ampara" />
        <option value="Anuradhapura" />
        <option value="Badulla" />
        <option value="Batticaloa" />
        <option value="Colombo" />
        <option value="Galle" />
        <option value="Gampaha" />
        <option value="Hambantota" />
        <option value="Jaffna" />
        <option value="Kalutara" />
        <option value="Kandy" />
        <option value="Kegalle" />
        <option value="Kilinochchi" />
        <option value="Kurunegala" />
        <option value="Mannar" />
        <option value="Matale" />
        <option value="Matara" />
        <option value="Monaragala" />
        <option value="Mullaitivu" />
        <option value="Nuwara Eliya" />
        <option value="Polonnaruwa" />
        <option value="Puttalam" />
        <option value="Ratnapura" />
        <option value="Trincomalee" />
        <option value="Vavuniya" />
      </datalist>
    </div>
  );
};

export default Districts;
