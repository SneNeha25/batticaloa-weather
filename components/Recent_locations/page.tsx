import { IoIosPartlySunny } from 'react-icons/io';

const Recent_locations = () => {
  return (
    <div className="mt-8">
      <h3 className="text-white text-sm font-semibold mb-2">RECENT LOCATIONS</h3>
      <div className="bg-teal-700/70 text-white rounded-md w-44 p-4">
        <div className="font-bold text-lg">Colombo</div>
        <div className="text-sm mb-2">Sri Lanka</div>
        <div className="flex items-center mt-2">
          <IoIosPartlySunny className="w-6 h-6 text-white mr-2" />
          <div className="text-3xl font-bold">30°</div>
        </div>
        <div className="text-xs mt-2">RealFeel® 35°</div>
      </div>
    </div>
  );
};

export default Recent_locations;
